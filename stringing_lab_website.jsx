export default function StringingLabWebsite() {
  const logoUrl = "https://i.imgur.com/h3rw6m9.png";

  const pricing = [
    {
      title: "Standard Delivery",
      price: "$25",
      time: "2–4 day turnaround",
      description: "Reliable restringing for regular players.",
    },
    {
      title: "Express Delivery",
      price: "$40",
      time: "1 day turnaround",
      description: "Fast service when you need your racquet back quickly.",
      featured: true,
    },
    {
      title: "Unlimited Subscription",
      price: "$200/mo",
      time: "Unlimited standard delivery",
      description: "Best for serious players who restring often.",
    },
  ];

  const steps = [
    "Drop off your racquet at Match Point Tennis Club in Orangeburg, NY, or ask about pickup.",
    "Choose standard, express, or the monthly unlimited plan.",
    "Your racquet is restrung with wholesale strings sourced from Tennis Warehouse.",
    "Get it back match-ready and dialed in.",
  ];

  const pickupOptions = [
    "$5 pickup within 10 miles",
    "$15 pickup for 10–25 miles",
  ];

  const cartItems = [
    { name: "Standard Delivery", price: 25 },
    { name: "Express Delivery", price: 40 },
    { name: "Unlimited Monthly Plan", price: 200 },
    { name: "Pickup within 10 miles", price: 5 },
    { name: "Pickup 10–25 miles", price: 15 },
  ];

  const colors = {
    bg: "#efefef",
    card: "#ffffff",
    dark: "#0f172a",
    text: "#0f172a",
    muted: "#5b6473",
    lime: "#a3c614",
    limeSoft: "#dced92",
    border: "#d9dde3",
  };

  const styles = {
    page: {
      minHeight: "100vh",
      background: colors.bg,
      color: colors.text,
      fontFamily: "Arial, sans-serif",
      lineHeight: 1.4,
    },
    container: {
      maxWidth: 1120,
      margin: "0 auto",
      padding: "0 24px",
    },
    hero: {
      borderBottom: `1px solid ${colors.border}`,
      padding: "56px 0 48px",
      background: colors.bg,
    },
    heroInner: {
      textAlign: "center",
    },
    logoWrap: {
      display: "flex",
      justifyContent: "center",
      marginBottom: 24,
    },
    logo: {
      width: "100%",
      maxWidth: 420,
      display: "block",
    },
    overline: {
      color: "#84a100",
      textTransform: "uppercase",
      letterSpacing: 3,
      fontWeight: 700,
      fontSize: 12,
      marginBottom: 12,
    },
    h1: {
      fontSize: 56,
      margin: 0,
      fontWeight: 900,
    },
    subtitle: {
      fontSize: 28,
      marginTop: 14,
      marginBottom: 18,
      fontWeight: 700,
    },
    lead: {
      maxWidth: 760,
      margin: "0 auto",
      fontSize: 18,
      color: colors.muted,
    },
    buttonRow: {
      display: "flex",
      gap: 14,
      justifyContent: "center",
      flexWrap: "wrap",
      marginTop: 28,
    },
    primaryBtn: {
      display: "inline-block",
      background: colors.dark,
      color: "#fff",
      padding: "14px 22px",
      borderRadius: 16,
      textDecoration: "none",
      fontWeight: 700,
      boxShadow: "0 8px 24px rgba(15,23,42,0.18)",
    },
    secondaryBtn: {
      display: "inline-block",
      background: "#fff",
      color: colors.text,
      padding: "14px 22px",
      borderRadius: 16,
      textDecoration: "none",
      fontWeight: 700,
      border: `1px solid ${colors.border}`,
    },
    limeBtn: {
      display: "inline-block",
      background: colors.lime,
      color: colors.dark,
      padding: "14px 22px",
      borderRadius: 16,
      textDecoration: "none",
      fontWeight: 800,
      boxShadow: "0 8px 24px rgba(163,198,20,0.28)",
    },
    section: {
      padding: "52px 0",
    },
    splitHeader: {
      display: "flex",
      justifyContent: "space-between",
      gap: 24,
      alignItems: "flex-end",
      flexWrap: "wrap",
      marginBottom: 28,
    },
    sectionLabel: {
      color: "#84a100",
      textTransform: "uppercase",
      letterSpacing: 3,
      fontWeight: 700,
      fontSize: 12,
      marginBottom: 8,
    },
    sectionTitle: {
      fontSize: 40,
      margin: 0,
      fontWeight: 900,
    },
    sectionText: {
      maxWidth: 520,
      color: colors.muted,
      fontSize: 17,
    },
    pricingGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: 22,
    },
    card: {
      background: colors.card,
      border: `1px solid ${colors.border}`,
      borderRadius: 28,
      padding: 28,
      boxShadow: "0 6px 18px rgba(15,23,42,0.06)",
    },
    featuredCard: {
      background: colors.dark,
      color: "#fff",
      border: `2px solid ${colors.lime}`,
      borderRadius: 28,
      padding: 28,
      boxShadow: "0 12px 28px rgba(15,23,42,0.2)",
    },
    badge: {
      display: "inline-block",
      background: colors.limeSoft,
      color: colors.dark,
      fontWeight: 800,
      fontSize: 12,
      textTransform: "uppercase",
      letterSpacing: 2,
      padding: "8px 12px",
      borderRadius: 999,
      marginBottom: 16,
    },
    cardTitle: {
      fontSize: 28,
      fontWeight: 800,
      margin: "0 0 12px",
    },
    cardPrice: {
      fontSize: 52,
      fontWeight: 900,
      margin: "0 0 6px",
    },
    cardTime: {
      fontSize: 15,
      color: colors.muted,
      marginBottom: 20,
    },
    cardTimeLight: {
      fontSize: 15,
      color: "#dbe3f0",
      marginBottom: 20,
    },
    cardBody: {
      fontSize: 17,
      color: colors.muted,
    },
    cardBodyLight: {
      fontSize: 17,
      color: "#f1f5f9",
    },
    twoCol: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: 24,
      alignItems: "start",
    },
    darkPanel: {
      background: colors.dark,
      color: "#fff",
      borderRadius: 28,
      padding: 28,
      boxShadow: "0 12px 28px rgba(15,23,42,0.2)",
    },
    list: {
      display: "grid",
      gap: 14,
      marginTop: 22,
    },
    listItemDark: {
      background: "rgba(255,255,255,0.06)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: 18,
      padding: 16,
    },
    highlightBox: {
      background: colors.limeSoft,
      borderRadius: 20,
      padding: 22,
      marginTop: 22,
    },
    cartGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
      gap: 24,
      marginBottom: 24,
    },
    cartItem: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 16,
      padding: 16,
      background: "#f8fafc",
      border: `1px solid ${colors.border}`,
      borderRadius: 18,
      marginTop: 12,
    },
    smallText: {
      fontSize: 14,
      color: colors.muted,
    },
    addBtn: {
      background: colors.dark,
      color: "#fff",
      border: "none",
      borderRadius: 12,
      padding: "10px 14px",
      fontWeight: 700,
      cursor: "pointer",
    },
    stepItem: {
      display: "flex",
      gap: 14,
      alignItems: "flex-start",
      background: colors.card,
      border: `1px solid ${colors.border}`,
      borderRadius: 18,
      padding: 18,
      boxShadow: "0 6px 18px rgba(15,23,42,0.06)",
      marginTop: 12,
    },
    numberBubble: {
      width: 38,
      height: 38,
      minWidth: 38,
      borderRadius: 999,
      background: colors.limeSoft,
      color: colors.dark,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 800,
    },
    infoBox: {
      background: colors.card,
      border: `1px solid ${colors.border}`,
      borderRadius: 18,
      padding: 18,
      marginTop: 12,
    },
    contactButtons: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
      gap: 14,
      marginTop: 20,
    },
  };

  return (
    <div style={styles.page}>
      <section style={styles.hero}>
        <div style={styles.container}>
          <div style={styles.heroInner}>
            <div style={styles.logoWrap}>
              <img src={logoUrl} alt="String Lab logo" style={styles.logo} />
            </div>
            <div style={styles.overline}>Precision Tennis Stringing</div>
            <h1 style={styles.h1}>String Lab</h1>
            <div style={styles.subtitle}>Tested. Tuned. Perfected.</div>
            <p style={styles.lead}>
              Premium restringing service with dependable turnaround, clean work, and a setup that feels right every time.
            </p>
            <div style={styles.buttonRow}>
              <a href="#pricing" style={styles.primaryBtn}>View Pricing</a>
              <a href="#contact" style={styles.secondaryBtn}>Contact String Lab</a>
              <a href="mailto:stringlab10@gmail.com?subject=String%20Lab%20Inquiry" target="_blank" rel="noreferrer" style={styles.limeBtn}>Email Now</a>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.section} id="pricing">
        <div style={styles.container}>
          <div style={styles.splitHeader}>
            <div>
              <div style={styles.sectionLabel}>Pricing</div>
              <h2 style={styles.sectionTitle}>Simple plans for every player</h2>
            </div>
            <div style={styles.sectionText}>
              Choose the turnaround that fits your schedule, or lock in monthly value with unlimited standard delivery.
            </div>
          </div>

          <div style={styles.pricingGrid}>
            {pricing.map((plan) => (
              <div key={plan.title} style={plan.featured ? styles.featuredCard : styles.card}>
                {plan.featured ? <div style={styles.badge}>Most Popular</div> : null}
                <div style={styles.cardTitle}>{plan.title}</div>
                <div style={styles.cardPrice}>{plan.price}</div>
                <div style={plan.featured ? styles.cardTimeLight : styles.cardTime}>{plan.time}</div>
                <div style={plan.featured ? styles.cardBodyLight : styles.cardBody}>{plan.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.twoCol}>
            <div style={styles.card}>
              <div style={styles.sectionLabel}>Monthly Membership</div>
              <h2 style={{ ...styles.sectionTitle, fontSize: 34 }}>Unlimited standard delivery for serious players</h2>
              <p style={styles.sectionText}>
                The $200 per month plan is built for players who go through strings often and want a dependable setup without paying per job.
              </p>
              <div style={styles.highlightBox}>
                <div style={{ ...styles.sectionLabel, marginBottom: 6 }}>Subscription Rate</div>
                <div style={{ fontSize: 44, fontWeight: 900 }}>$200<span style={{ fontSize: 24 }}>/month</span></div>
                <div style={{ marginTop: 8, color: colors.muted }}>Includes unlimited standard delivery restringing.</div>
              </div>
            </div>

            <div style={styles.darkPanel}>
              <div style={{ ...styles.sectionLabel, color: "#dced92" }}>What sets it apart</div>
              <h2 style={{ ...styles.sectionTitle, fontSize: 34, color: "#fff" }}>Clean process. Consistent results.</h2>
              <div style={styles.list}>
                <div style={styles.listItemDark}>Wholesale strings sourced from Tennis Warehouse.</div>
                <div style={styles.listItemDark}>Drop-off at Match Point Tennis Club, Orangeburg, NY.</div>
                <div style={styles.listItemDark}>Pickup available based on distance.</div>
                <div style={styles.listItemDark}>Built for players who care about feel, control, and consistency.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.cartGrid}>
            <div style={styles.card}>
              <div style={styles.sectionLabel}>Cart</div>
              <h2 style={{ ...styles.sectionTitle, fontSize: 34 }}>Build your order</h2>
              <p style={styles.sectionText}>Choose your service and then pay online using your payment link.</p>
              {cartItems.map((item) => (
                <div key={item.name} style={styles.cartItem}>
                  <div>
                    <div style={{ fontWeight: 700 }}>{item.name}</div>
                    <div style={styles.smallText}>Add this option to your order</div>
                  </div>
                  <button style={styles.addBtn}>Add ${item.price}</button>
                </div>
              ))}
            </div>

            <div style={styles.darkPanel}>
              <div style={{ ...styles.sectionLabel, color: "#dced92" }}>Checkout</div>
              <h2 style={{ ...styles.sectionTitle, fontSize: 34, color: "#fff" }}>Pay for your restring online</h2>
              <p style={{ color: "#dbe3f0", fontSize: 17 }}>
                To make this fully work for real payments, connect a Stripe, Square, or PayPal payment link.
              </p>
              <div style={{ ...styles.listItemDark, marginTop: 20 }}>
                <div style={{ textTransform: "uppercase", letterSpacing: 2, fontSize: 12, color: "#dced92", fontWeight: 700 }}>Current payment setup</div>
                <div style={{ marginTop: 10, fontSize: 20, fontWeight: 700 }}>Add your payment link here</div>
                <div style={{ marginTop: 8, color: "#dbe3f0" }}>Example: Stripe Payment Link, Square Checkout Link, or PayPal checkout page.</div>
              </div>
              <div style={{ ...styles.contactButtons, marginTop: 22 }}>
                <a href="https://buy.stripe.com/test_eVqbJ3gexchl3lJ7WJ6Zy00" target="_blank" rel="noreferrer" style={styles.limeBtn}>
                Pay Now
              </a>
                <a href="mailto:stringlab10@gmail.com?subject=String%20Lab%20Order" target="_blank" rel="noreferrer" style={{ ...styles.secondaryBtn, background: "rgba(255,255,255,0.08)", color: "#fff", border: "1px solid rgba(255,255,255,0.18)" }}>Send Order by Email</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.twoCol}>
            <div>
              <div style={styles.sectionLabel}>How it works</div>
              <h2 style={{ ...styles.sectionTitle, fontSize: 34 }}>From drop-off to match-ready</h2>
              {steps.map((step, index) => (
                <div key={step} style={styles.stepItem}>
                  <div style={styles.numberBubble}>{index + 1}</div>
                  <div>{step}</div>
                </div>
              ))}
            </div>

            <div id="contact" style={styles.card}>
              <div style={styles.sectionLabel}>Contact & Pickup</div>
              <h2 style={{ ...styles.sectionTitle, fontSize: 34 }}>Book your next restring</h2>
              <p style={styles.sectionText}>Reach out to schedule a drop-off, ask about string options, or set up a pickup.</p>

              <div style={styles.infoBox}>
                <div style={styles.smallText}>Email</div>
                <div style={{ fontSize: 22, fontWeight: 800, marginTop: 4 }}>stringlab10@gmail.com</div>
              </div>
              <div style={styles.infoBox}>
                <div style={styles.smallText}>Phone</div>
                <div style={{ fontSize: 22, fontWeight: 800, marginTop: 4 }}>551-370-2962</div>
              </div>
              <div style={styles.infoBox}>
                <div style={styles.smallText}>Drop-off Location</div>
                <div style={{ fontSize: 22, fontWeight: 800, marginTop: 4 }}>Match Point Tennis Club</div>
                <div style={{ marginTop: 4, color: colors.muted }}>Orangeburg, NY</div>
              </div>

              <div style={{ ...styles.darkPanel, marginTop: 16 }}>
                <div style={{ ...styles.sectionLabel, color: "#dced92" }}>Pickup Rates</div>
                <div style={styles.list}>
                  {pickupOptions.map((option) => (
                    <div key={option} style={styles.listItemDark}>{option}</div>
                  ))}
                </div>
              </div>

              <div style={styles.contactButtons}>
                <a href="mailto:stringlab10@gmail.com?subject=String%20Lab%20Inquiry" target="_blank" rel="noreferrer" style={styles.primaryBtn}>Email String Lab</a>
                <a href="tel:5513702962" style={styles.secondaryBtn}>Call Now</a>
                <a href="sms:5513702962" style={styles.limeBtn}>Text to Book</a>
                <a href="https://maps.google.com/?q=Match%20Point%20Tennis%20Club%20Orangeburg%20NY" target="_blank" rel="noreferrer" style={styles.secondaryBtn}>Open Map</a>
              </div>

              <div style={{ marginTop: 16 }}>
                <a href="#pricing" style={{ ...styles.secondaryBtn, display: "block", textAlign: "center" }}>Back to Pricing</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
