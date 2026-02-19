import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaSchool, FaGraduationCap } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "radial-gradient(circle at top, #0d0d0d, #000)",
        color: "white",
        padding: "3rem 1rem",
      }}
    >
      {/* --- About Me + Education Section --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        style={{
          width: "100%",
          maxWidth: "1100px",
          textAlign: "left",
          marginTop: "1rem",
          lineHeight: 1.8,
          background: "rgba(255,255,255,0.04)",
          padding: "3rem 3.5rem",
          borderRadius: "18px",
          boxShadow: "0 0 25px rgba(0,255,200,0.08)",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* --- Header --- */}
        <h2
          style={{
            fontSize: "1.9rem",
            marginBottom: "1.2rem",
            background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          About Me
        </h2>

        {/* --- Description --- */}
        <p
  style={{
    fontSize: "1.1rem",
    color: "rgba(255,255,255,0.85)",
    marginBottom: "1rem",
  }}
>
  Hi, I’m <strong>Himanshu Kumar</strong> — an aspiring 
  <strong> MERN Stack Developer</strong> passionate about building scalable 
  and high-performance web applications. I specialize in React, Node.js, 
  Express, and MongoDB, and enjoy transforming ideas into practical digital solutions.
</p>

<p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.8)" }}>
  Beyond development, I focus on writing clean, maintainable code, optimizing 
  application performance, and crafting seamless user experiences. I believe 
  great software combines <strong>strong backend architecture</strong> with{" "}
  <strong>intuitive frontend design</strong>.
</p>

<p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.8)" }}>
  Currently pursuing my MCA, I am continuously enhancing my skills in full-stack 
  development while also exploring AI and Data Science to integrate intelligent 
  features into modern web applications.
</p>



        {/* --- Education Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          style={{ marginTop: "3rem" }}
        >
          <h3
            style={{
              fontSize: "1.6rem",
              marginBottom: "1.5rem",
              background:
                "linear-gradient(90deg, var(--accent), var(--accent-2))",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Education
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.2rem",
            }}
          >
            {/* --- Education Card 1 --- */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1.5rem 2rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(0,255,200,0.05)",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              <FaUniversity size={40} color="var(--accent)" />
              <div>
               <h4
  style={{
    color: "var(--accent)",
    marginBottom: "0.4rem",
    fontSize: "1.25rem",
  }}
>
  Master of Computer Applications (MCA)
</h4>

<p
  style={{
    color: "rgba(255,255,255,0.85)",
    marginBottom: "0.2rem",
  }}
>
  <strong>Graphic Era University</strong> — Dehradun, Uttarakhand
</p>

<p style={{ color: "rgba(255,255,255,0.7)" }}>
  Specialization: Full Stack Web Development | 2nd Year (Pursuing) | GPA: 7.5
</p>

<p style={{ color: "rgba(255,255,255,0.7)" }}>
  2024 – 2026
</p>

              </div>
            </motion.div>

            {/* --- Education Card 2 --- */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1.5rem 2rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(0,255,200,0.05)",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              <FaGraduationCap size={38} color="var(--accent)" />
              <div>
                <h4
                  style={{
                    color: "var(--accent)",
                    marginBottom: "0.4rem",
                    fontSize: "1.25rem",
                  }}
                >
                  Bachelor Of Computr Applications (BCA)
                </h4>
                <p
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    marginBottom: "0.2rem",
                  }}
                >
                  <strong>B.S.College (Patliputra University)</strong> — Patna
                  , Bihar
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                    Percentage: 69%
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>Completed in 2024</p>
              </div>
            </motion.div>

            {/* --- Education Card 3 --- */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1.5rem 2rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(0,255,200,0.05)",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              <FaSchool size={36} color="var(--accent)" />
              <div>
                <h4
                  style={{
                    color: "var(--accent)",
                    marginBottom: "0.4rem",
                    fontSize: "1.25rem",
                  }}
                >
                  Higher Secondary Education (12th Board)
                </h4>
                <p
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    marginBottom: "0.2rem",
                  }}
                >
                  <strong>M.S.S.G College Areraj</strong> — Bihar
                  
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                   BSEB | Percentage: 55%
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>Completed in 2021</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
