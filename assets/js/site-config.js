/* ---------------------------------------------------------------------------
   Runtime configuration for RootVexx. Edited through /admin.html, or by hand.

   THIS FILE IS PUBLIC. Everything in it ships to every visitor.
   Payment Link URLs, business details and the admin hash are all fine to publish.
   A Stripe SECRET key (sk_live_... / sk_test_...) is NOT. Never put one here.
--------------------------------------------------------------------------- */
window.SITE_CONFIG = {
  // SHA-256 of the admin passphrase. This only hides the form from a casual
  // visitor -- anyone can read this file and bypass it. Nothing behind it is
  // secret; the real gate on changing the live site is your GitHub login.
  admin: { passHash: "5b9e9741342f4f8a87a03b52634853031e9478d49220cadd57e189392e0b7bb3" },

  // Shown in the footer of every page. Google and Stripe both verify these.
  business: {
    company:   "RootVexx Ltd",
    companyNo: "",
    vatNo:     "",
    street:    "Conway Rd",
    city:      "Conwy",
    postcode:  "LL32 7TE",
    phone:     "+44 7858 117670"
  },

  // Data collector that feeds the admin dashboard. Without it the dashboard
  // shows nothing rather than inventing figures. See stripe/README.md.
  analyticsEndpoint: "https://rootvexx-lawnstride-collector.stellapark1141.workers.dev",

  // Optional: Checkout Sessions for baskets with more than one machine.
  checkoutEndpoint: "https://rootvexx-lawnstride-collector.stellapark1141.workers.dev/checkout",

  // One Stripe Payment Link per machine. Blank = that machine routes to an
  // enquiry instead of pretending to take payment.
  paymentLinks: {
    "RV-CREX6M": "https://buy.stripe.com/cNiaEXacK6Iu9MUbvu6c00c",
    "RV-DP5000": "https://buy.stripe.com/cNi14net0d6S5wE5766c00d",
    "RV-TW1375G": "https://buy.stripe.com/5kQaEX3OmeaW2ks2YY6c00e",
    "RV-360SW": "https://buy.stripe.com/eVqcN55Wud6S4sA7fe6c00f"
  }
};
