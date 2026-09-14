# Lead endpoint contract / v2

Set `NEXT_PUBLIC_LEAD_ENDPOINT` at build time to the verified delivery URL. The browser POSTs JSON:

```json
{
  "name": "Example visitor",
  "contact": "visitor@example.com",
  "organization": "Optional organization",
  "ticket": "5 000–10 000 $",
  "dataRoom": true,
  "consent": true,
  "ref": "partner-reference",
  "utm": {"utm_source": "campaign"}
}
```

`ticket` is the localized dropdown text, not a numeric index. `dataRoom` requests document access; it does not grant it. Contact accepts email or a Telegram handle matching `@[A-Za-z][A-Za-z0-9_]{4,31}`. The form limits name to 100, organization to 150 and contact to 254 characters. Name and consent are required. The receiver must validate values independently, bound attribution data and apply its own retention, access and rate-limit rules.

The client allows 12 seconds and treats 2xx as accepted. Return 2xx only after durable receipt. A failed or timed-out response retains entries and says delivery could not be confirmed; the server may already have received the request, so retries should be deduplicated. No private key may be placed in a public build variable.

Without an endpoint, the form generates a localized plain-text download containing the name, contact, organization, selected range, document request and consent. It explicitly states that the request has not been sent. The confirmation receives keyboard focus. No automatic message is sent to anyone in this mode.

Referral and UTM values are read from the current page URL for the JSON payload; this version does not retain them in session storage or implement analytics events. A real destination and durable receipt have not been verified. The calendar is configured separately with `NEXT_PUBLIC_CALENDAR_URL`.
