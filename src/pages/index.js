import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Head from "next/head";
import ProfileImage from "@/components/ProfileImage/ProfileImage";
import PersonalInfo from "@/components/PersonalInfo/PersonalInfo";
import ContactIcons from "@/components/ContactIcons/ContactIcons";
import SocialMediaIcons from "@/components/SocialMediaIcons/SocialMediaIcons";
import styles from "../styles/Home.module.scss";
import Layout from "@/components/Layout/Layout";
import { motion } from "framer-motion";
import PaymentInfo from "@/components/PaymentInfo/PaymentInfo";
import EducationAndCertifications from "@/components/EducationAndCertification/EducationAndCertification";
import WorkExperience from "@/components/WorkExperience/WorkExperience";
import ImageGallery from "@/components/ImageGallery/ImageGallery";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import QRCodeComponent from "@/components/QrCodeComponent/QrCodeComponent";
import Services from "@/components/Services/Services";
import ProductsSection from "@/components/ProductsSection/ProductsSection";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";

export default function testpage() {
  const productsData = [
    {
      id: 1,
      name: "Manejo de Redes Sociales",
      image: "/images/product1.jpg",
      description: [
        "Plan Básico",
        "Plan Emprendedor",
        "Plan Profesional",
        "Plan Transformación Digital",
        "Campaña Express",
        "Plan Viral Básico",
        "Plan Viral Pro",
      ],
      phone: "+593992542248",
    },
    {
      id: 2,
      name: "Asesorías 1.1",
      image: "/images/product2.jpg",
      description: [
        "Asesoría Express de tu perfil de instagram",
        "Asesoria y auditoria de redes sociales",
        "Asesoria de preguntas y respuestas",
        "Asesoria de contenido",
      ],
      phone: "+593992542248",
    },
    {
      id: 3,
      name: "Diseño de Marca",
      image: "/images/product3.jpg",
      description: [
        "Logotipo",
        "Logotipo + manual de marca",
        "Manual de marca",
        "Registro de marca",
      ],
      phone: "+593992542248",
    },
  ];

  const service = [
    {
      service: "Manejo de Redes Sociales",
      description:
        "Brindamos asesoría legal integral en disputas civiles, incluyendo contratos, responsabilidad civil, reclamos por daños y perjuicios, y más. Nuestro enfoque se centra en la prevención de litigios y la representación eficaz en juicio para proteger tus derechos e intereses.",
      imageUrl: "/images/service1.jpg",
    },
    {
      service: "Consultoría y asesoría de Marketing",
      description:
        "Ofrecemos servicios de consultoría y asesoría en marketing, ayudando a las empresas a desarrollar estrategias de marketing efectivas y a maximizar su presencia en línea. Nuestro enfoque se centra en la adopción de estrategias innovadoras y la aplicación de las últimas tendencias en marketing para impulsar el crecimiento de la marca y el retorno de inversión.",
      imageUrl: "/images/service2.jpg",
    },

    {
      service: "Branding y Creación de Marca",
      description:
        "Nuestros servicios de branding y creación de marca están diseñados para ayudar a las empresas a establecer una identidad de marca sólida y atractiva. Nuestro enfoque se centra en la creación de una narrativa de marca única y en la implementación de estrategias de branding efectivas para aumentar el reconocimiento de la marca y la lealtad del cliente.",
      imageUrl: "/images/service3.jpg",
    },
  ];

  return (
    <>
      <Head>
        <title>Ing. Ericka Veintimilla</title>
        <meta name="description" content="Ing. Ericka Veintimilla Digital Card" />
        <link rel="icon" href="/icons/logo.ico" />

        {/* Open Graph */}
        <meta property="og:url" content="https://erickaveintimilla.businessdigicards.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Business digital card Ing. Ericka Veintimilla" />
        <meta property="og:description" content="Tarjeta de presentación digital" />
        <meta
          property="og:image"
          content="https://erickaveintimilla.businessdigicards.com/images/shared_image.jpg"
        />
      </Head>

      <Layout>
        <Container fluid className={styles.mainContainer}>
          <Row className={styles.mainRow}>
            {/* Columna con imagen de perfil, informacón general, redes sociales e imagen informativa */}
            <Col xs={12} className={styles.infoCol}>
              <section id="profile">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <ProfileImage
                    src="/images/profile.jpeg"
                    alt="Mgr. Ericka Veintimilla T."
                    size={250}
                  />
                </motion.div>
              </section>
              <section>
                <PersonalInfo
                  name="Ericka Veintimilla"
                  title="Magister en Marketing y Gerencia"
                  description="Ericka Veintimilla, experta en marketing con una maestría en Marketing Digital, se especializa en crear estrategias digitales innovadoras y efectivas. Su enfoque se centra en impulsar el crecimiento de la marca y optimizar la presencia en línea a través de tácticas de marketing de vanguardia."
                />
              </section>
              <section className={styles.socialMediaSection}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <SocialMediaIcons
                    facebook="https://www.facebook.com/ericka.veintimillatinoco"
                    instagram="https://www.instagram.com/eriickaveintimilla/"
                    tiktok="https://www.tiktok.com/@erickaveintimilla"
                  />
                </motion.div>
              </section>
              <section className={styles.contactSection}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <ContactIcons
                    phone="+593992542248"
                    email="eriveinti@gmail.com"
                    whatsapp="+593992542248"
                    //telegram="+593992542248"
                    location={["anvetcorp", "Quito, Ecuador"]}
                  />

                  <div className={styles.whatsappButtonContact}>
                    <WhatsAppButton
                      stylesButton={styles.whatsappButtonContact}
                      phone="+593992542248"
                      message="Hola, me gustaría saber más sobre tus servicios"
                      label="Contáctame"
                    />
                  </div>
                </motion.div>
              </section>
            </Col>
          </Row>

          {/* Componente de educación y certificaciones */}

          <Row>
            <Col className={styles.educationSection}>
              <section id="education">
                <div className={styles.educationTitle}>
                  <h2>Educación y Certificaciones</h2>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <div className={styles.educationInfo}>
                    <EducationAndCertifications
                      items={[
                        {
                          title: "Licenciada en Marketing",
                          institution: "Universidad Tecnológica Equinoccial",
                          year: "2021",
                          description:
                            "Ericka Veintimilla se graduó en Marketing en la Universidad Tecnológica Equinoccial, una institución reconocida por su enfoque innovador y práctico en la enseñanza del marketing. Durante su licenciatura, adquirió una base sólida en principios de marketing, estrategias de mercado y comportamiento del consumidor, preparándola para enfrentar los desafíos dinámicos del mundo del marketing moderno.",
                          logo: "/images/ute_logo.png",
                        },
                        {
                          title: "Magister en Marketing digital",
                          institution: "Escuela de Postgrado Newman",
                          year: "2023",
                          description:
                            "Complementando su educación en marketing, Ericka obtuvo un máster en Marketing Digital en la Escuela de Postgrado Newman. Este programa avanzado le permitió especializarse en las últimas tendencias y herramientas del marketing digital, incluyendo SEO, marketing en redes sociales y análisis de datos. Su maestría refleja su compromiso con la adopción de estrategias digitales innovadoras y su habilidad para aplicarlas efectivamente en el mercado actual",
                          logo: "/images/newman_logo.png",
                        },
                      ]}
                    />
                  </div>
                </motion.div>
              </section>
            </Col>
          </Row>

          

          {/* Componente de servicios y/o especialidades */}

          <Row>
            <Col className={styles.servicesSection}>
              <section id="servicios">
                <div className={styles.servicesText}>
                  <h2 className={styles.servicesTitle}>Servicios</h2>
                  <span className={styles.servicesInstructions}>
                    Haz clic en el item para ver la información
                  </span>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <div className={styles.servicesInfo}>
                    <Services services={service} />
                  </div>
                </motion.div>
              </section>
            </Col>
          </Row>

          {/* Componente de productos */}
          <section className={styles.productsSection} id="productos">
            <Row>
              <Col className={styles.productsSection}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <h1 className={styles.productsTitle}>Productos Destacados</h1>
                  <p className={styles.productsDescription}>
                    Haz clic en el producto para ver los detalles
                  </p>
                  <ProductsSection productsData={productsData} />
                </motion.div>
              </Col>
            </Row>
          </section>
          {/* Componente de información de pago */}

          <Row>
            <Col className={styles.paymentSection}>
              <section id="payment" className={styles.paymentInfo}>
                <div>
                  <h2 className={styles.paymentTitle}>Información de Pago</h2>
                  <p className={styles.paymentDescription}>
                    Haz clic en el logo para acceder a los datos de la cuenta
                  </p>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <div className={styles.bankInfo}>
                    <PaymentInfo
                      bankName="Banco Pichincha"
                      accountNumber="2204744098"
                      accountType="Cuenta de Ahorros"
                      identification="1726213612"
                      email="eriveinti@gmail.com"
                      bankLogo="/images/bancoPichincha_b.png"
                    />
                    <PaymentInfo
                      bankName="Banco Guayaquil"
                      accountNumber="2204744098"
                      accountType="Cuenta de Ahorros"
                      identification="1726213612"
                      email="eriveinti@gmail.com"
                      bankLogo="/images/bancoGuayaquil_b.png"
                    />
                    <PaymentInfo
                      bankName="Banco Produbanco"
                      accountNumber="2204744098"
                      accountType="Cuenta de Ahorros"
                      identification="1726213612"
                      email="eriveinti@gmail.com"
                      bankLogo="/images/produbanco_b.png"
                    />
                  </div>
                </motion.div>
              </section>
            </Col>
          </Row>

          {/* Componente de video player */}

          <Row>
            <Col className={styles.videoPlayer}>
              <VideoPlayer videoUrl="/video/marketing.mp4" />
            </Col>
          </Row>

          {/* Componente de QR Code */}
          <Row>
            <Col className={styles.qrCode}>
              <section id="qrCode">
                <QRCodeComponent qrCodeImageUrl="/images/qrcode-ev.png" altText="QR Code" />
              </section>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
}
