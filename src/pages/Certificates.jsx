import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ✅ Certificates data (added URLs for View button)
const CERTS = {
  tech: [
    {
      title: "Web Development Fundamentals",
      org: "IBM SkillsBuild",
      date: "Jan 23, 2026",
      img: "/certs/ibm-web-dev.png",
      link: "/certs/ibm-web-dev.pdf",
    },
    {
      title: "Artificial Intelligence Fundamentals",
      org: "IBM SkillsBuild",
      date: "Aug 16, 2025",
      img: "/certs/ibm-ai.png",
      link: "/certs/ibm-ai.pdf",
    },
    {
      title: "Full Stack Web Development - Skill Up",
      org: "GeeksforGeeks",
      date: "2025",
      img: "/certs/gfg-fullstack.png",
      link: "/certs/gfg-fullstack.pdf",
    },
    {
      title: "Machine Learning",
      org: "Simplilearn SkillUp",
      date: "Feb 25, 2025",
      img: "/certs/ml-simplilearn.png",
      link: "/certs/ml-simplilearn.pdf",
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
      org: "Oracle University",
      date: "Sept 04, 2025",
      img: "/certs/oracle-ds.png",
      link: "/certs/oracle-ds.pdf",
    },
    {
      title: "AWS Cloud Practitioner Essentials",
      org: "AWS Training & Certification",
      date: "Oct 02, 2025",
      img: "/certs/aws.png",
      link: "/certs/aws.pdf",
    },
    {
      title: "AI & ML Internship Certificate",
      org: "AICTE x Edunet Foundation",
      date: "Dec 2025 – Jan 2026",
      img: "/certs/aicte-ml.png",
      link: "/certs/aicte-ml.pdf",
    },
    {
      title: "Software Engineer Role Certification",
      org: "HackerRank",
      date: "Jan 26, 2026",
      img: "/certs/hackerrank-se.png",
      link: "/certs/hackerrank-se.pdf",
    },
    {
      title: "Positioning SAP Business Data Cloud",
      org: "SAP Learning",
      date: "Jan 20, 2026",
      img: "/certs/sap.png",
      link: "/certs/sap.pdf",
    },
  ],
};


export default function Certificates() {
  const [tab, setTab] = useState("tech");
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="container" style={{ padding: "40px 0" }}>
      <div className="card" style={{ background: "#111", borderRadius: 12, padding: 24 }}>
        <h2 style={{ fontSize: "1.8rem", color: "#fff", marginBottom: 4 }}>Certificates 🏅</h2>
        <p className="lead" style={{ color: "#aaa" }}>
          Explore my certifications — technical & others.
        </p>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
          {["tech"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={tab === t ? "tab active" : "tab"}
              style={{
                padding: "8px 18px",
                borderRadius: 8,
                border: "none",
                cursor: "pointer",
                background: tab === t ? "#007bff" : "#333",
                color: "#fff",
                fontWeight: 500,
                transition: "0.3s",
              }}
            >
              {t === "tech" ? "Tech" : "Others"}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div
          className="certs-grid"
          style={{
            marginTop: 28,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          <AnimatePresence mode="wait">
            {CERTS[tab].map((c, idx) => (
             <motion.div
  key={c.title}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4, delay: idx * 0.1 }}
  whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 15px rgba(0, 123, 255, 0.4)",
                }}
  style={{
    background: "#1a1a1a",
    borderRadius: 12,
    padding: 16,
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  }}
>
  <img
    src={c.img}
    alt={c.title}
    style={{
      width: "100%",
      height: 150,
      objectFit: "cover",
      borderRadius: 8,
      marginBottom: 12,
    }}
  />

  <div>
    <h4 style={{ margin: "4px 0" }}>{c.title}</h4>
    <p style={{ fontSize: 13, color: "#aaa", margin: "2px 0" }}>
      {c.org}
    </p>
    <p style={{ fontSize: 12, color: "#777" }}>
      {c.date}
    </p>
  </div>

  <a
    href={c.link}
    target="_blank"
    rel="noopener noreferrer"
    style={{ marginTop: 12 }}
  >
    <button
      style={{
        width: "100%",
        padding: "8px 0",
        background: "#007bff",
        border: "none",
        borderRadius: 6,
        color: "#fff",
        fontWeight: 500,
        cursor: "pointer",
        transition: "0.3s",
      }}
    >
      View Certificate
    </button>
  </a>
</motion.div>

            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal Preview */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0,0,0,0.8)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
            }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.img
              src={selectedCert.img}
              alt={selectedCert.title}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              style={{
                maxWidth: "90%",
                maxHeight: "85%",
                borderRadius: 10,
                boxShadow: "0 0 25px rgba(255,255,255,0.2)",
              }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
