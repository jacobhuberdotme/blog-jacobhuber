import WebSocket from "ws";
import Twilio from "twilio";
import { NextResponse } from "next/server";

// Twilio Credentials
const accountSid = process.env.TWILIO_ACCOUNT_SID as string;
const authToken = process.env.TWILIO_AUTH_TOKEN as string;
const fromPhone = process.env.TWILIO_PHONE_NUMBER as string;
const toPhone = process.env.MY_PHONE_NUMBER as string;

// Coinbase WebSocket URL
const WS_BASE = "wss://advanced-trade-ws.coinbase.com";
const targetPrice = parseFloat(process.env.TARGET_PRICE || "2000"); // Target ETH price

let ws: WebSocket | null = null;
let lastNotificationTime = 0; // Timestamp of last notification
const COOL_DOWN_PERIOD = 5 * 60 * 1000; // 5 minutes in milliseconds

// Connect to WebSocket
async function connectWebSocket() {
  try {
    ws = new WebSocket(WS_BASE);

    ws.on("open", () => {
      console.log("WebSocket connected");

      // Subscribe to ETH-USD ticker channel
      const subscribeMessage = {
        type: "subscribe",
        product_ids: ["ETH-USD"], // ETH to USD market
        channel: "ticker", // Ticker channel
      };
      ws?.send(JSON.stringify(subscribeMessage));
    });

    ws.on("message", (data: string | Buffer) => {
      const rawMessage = data.toString();
      console.log("Raw WebSocket Message:", rawMessage);

      try {
        const message = JSON.parse(rawMessage);

        // Extract price if the message is a ticker update
        if (
          message.channel === "ticker" &&
          message.events &&
          Array.isArray(message.events)
        ) {
          const tickerEvent = message.events.find((event: any) => event.type === "update");
          if (tickerEvent && tickerEvent.tickers && Array.isArray(tickerEvent.tickers)) {
            const ticker = tickerEvent.tickers.find((t: any) => t.product_id === "ETH-USD");
            if (ticker && ticker.price) {
              const price = parseFloat(ticker.price);
              console.log(`Current ETH Price: ${price}`);

              // Check if price crosses target and respects cooldown
              const currentTime = Date.now();
              if (price >= targetPrice && currentTime - lastNotificationTime >= COOL_DOWN_PERIOD) {
                console.log(`Target price reached: ${price}`);
                sendNotification(price);
                lastNotificationTime = currentTime; // Update last notification time
              } else if (price >= targetPrice) {
                console.log("Notification suppressed due to cooldown period.");
              }
            }
          }
        } else {
          console.log("Non-ticker message received or invalid format");
        }
      } catch (error) {
        console.error("Error parsing message:", rawMessage, error);
      }
    });

    ws.on("error", (error) => {
      console.error("WebSocket Error:", error);
    });

    ws.on("close", () => {
      console.log("WebSocket closed");
      ws = null;
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Failed to connect WebSocket:", error.message);
      return NextResponse.json(
        { message: "Failed to connect WebSocket", error: error.message },
        { status: 500 }
      );
    } else {
      console.error("Unknown error occurred:", error);
      return NextResponse.json(
        { message: "Failed to connect WebSocket", error: "Unknown error" },
        { status: 500 }
      );
    }
  }
}

// Send SMS Notification
function sendNotification(price: number) {
  const client = Twilio(accountSid, authToken);
  client.messages
    .create({
      body: `Ethereum price alert! ETH has hit $${price}.`,
      from: fromPhone,
      to: toPhone,
    })
    .then((message) => console.log(`SMS sent: ${message.sid}`))
    .catch((error) => console.error("Twilio Error:", error));
}

export async function GET() {
  if (!ws) {
    await connectWebSocket();
  }

  return NextResponse.json({ message: "Price watcher running" });
}