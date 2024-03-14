import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import ProfileImage from "@/components/ProfileImage/ProfileImage";
import PersonalInfo from "@/components/PersonalInfo/PersonalInfo";
import ContactIcons from "@/components/ContactIcons/ContactIcons";
import SocialMediaIcons from "@/components/SocialMediaIcons/SocialMediaIcons";
import styles from "../styles/testPage.module.scss";
import Layout from "@/components/Layout/Layout";
import { motion } from "framer-motion";
import PaymentInfo from "@/components/PaymentInfo/PaymentInfo";
import EducationAndCertifications from "@/components/EducationAndCertification/EducationAndCertification";
import WorkExperience from "@/components/WorkExperience/WorkExperience";
import ImageGallery from "@/components/ImageGallery/ImageGallery";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import QRCodeComponent from "@/components/QrCodeComponent/QrCodeComponent";

export default function testpage() {
  return (
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
                  src="/images/profile.jpg"
                  alt="Dr. Carlos Veintimilla T."
                  size={250}
                />
              </motion.div>
            </section>
            <section>
              <PersonalInfo
                name="Dr. Carlos Veintimilla"
                title="Médico Cirujano"
                description="Especialista en cirugía, combina más de 15 años de experiencia con técnicas avanzadas. Su enfoque innovador en cirugía le ha ganado reconocimiento en el campo médico, asegurando a sus pacientes atención de vanguardia y precisión excepcional."
              />
            </section>
            <section className={styles.socialMediaSection}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <SocialMediaIcons
                  facebook="https://www.facebook.com/carlosivan.veintimillatinoco.9"
                  instagram="https://www.instagram.com/carveintimilla/"
                  linkedin="https://www.linkedin.com/in/carlos-ivan-veintimilla-tinoco-msc-md-facs-12364973/"
                  tiktok="https://www.tiktok.com/@carlosivanveintimilla?lang=es"
                  twitter="https://twitter.com/CarlosIvanVein1"
                />
                {/* Columna con información de contacto */}

                <section>
                  <ContactIcons
                    phone="+593992881079"
                    email="drcarveintimilla@gmail.com"
                    whatsapp="+593992881079"
                    telegram="+593992881079"
                    //location={["PFW8+P24, El Canelo, Quito 170148"]}
                  />
                </section>
              </motion.div>
            </section>
            <section className={styles.imageSection}>
              <Image
                src="/images/hero.jpg"
                alt="Médico con los brazos cruzados"
                width={500}
                height={300}
                layout="responsive"
                className={styles.backgroundImage}
              />
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
                        title: "Médico Cirujano",
                        institution: "Universidad Central del Ecuador",
                        year: "2005",
                        description:
                          "Graduado en Medicina General de la prestigiosa Universidad Central del Ecuador, el Dr. Carlos Veintimilla ha forjado una sólida base en los fundamentos de la atención médica. Su formación en esta reconocida institución le ha proporcionado un profundo conocimiento en diversas áreas de la medicina, preparándolo para enfrentar con competencia y empatía los retos de la salud moderna.",
                        logo: "/images/ucentral_logo.png",
                      },
                      {
                        title: "Especialista en Cirugía General",
                        institution: "Universidad Central del Ecuador",
                        year: "2017",
                        description:
                          "Complementando su formación médica, el Dr. Carlos Veintimilla se especializó en Cirugía General a través de un riguroso programa de posgrado. Este período de estudios avanzados le ha dotado de habilidades especializadas y un conocimiento profundo en técnicas quirúrgicas, preparándolo para abordar con precisión y cuidado los procedimientos quirúrgicos más complejos.,",
                        logo: "/images/facultad_medicina_logo.jpg",
                      },
                      {
                        title: "Mgr Gerencia Inst.Salud",
                        institution: "Universidad de las Américas",
                        year: "2023",
                        description:
                          "El Dr. Carlos Veintimilla amplió su espectro profesional con una Maestría en Gerencia de Instituciones de Salud, una formación que le ha proporcionado una visión integral y estratégica del sistema de salud. Esta especialización le permite combinar su experiencia clínica con habilidades en la administración y gestión de servicios de salud, enfocándose en mejorar la eficiencia, calidad y accesibilidad de la atención médica.",
                        logo: "/images/udla_logo.png",
                      },
                    ]}
                  />
                </div>
              </motion.div>
            </section>
          </Col>
        </Row>

        {/* Componente de experiencia laboral */}

        <Row>
          <Col className={styles.workExperience}>
            <section id="experience">
              <WorkExperience
                experiences={[
                  {
                    company: "Hospital Eugenio Espejo",
                    role: "Cirugía general",
                    description: "En su destacada posición como Cirujano en el Hospital Eugenio Espejo, el Dr. Carlos Veintimilla aporta su vasta experiencia y habilidad quirúrgica al servicio de la comunidad. En este prestigioso centro médico, conocido por su excelencia en atención sanitaria, él se especializa en realizar cirugías de alta complejidad, contribuyendo significativamente a mejorar la calidad de vida de sus pacientes. Su dedicación y pericia en el quirófano reflejan su compromiso con los más altos estándares de cuidado y tratamiento médico. .",
                  },
                  {
                    company: "Clínicas varias",
                    role: "Cirujano General",
                    description: "En su rol como Cirujano General, el Dr. Carlos Veintimilla demuestra una habilidad excepcional en una amplia gama de procedimientos quirúrgicos. Con un enfoque meticuloso y una mano firme, se especializa en realizar cirugías complejas, abarcando desde intervenciones abdominales hasta procedimientos mínimamente invasivos. Su compromiso con la precisión y la seguridad del paciente es evidente en cada cirugía, asegurando resultados óptimos y una recuperación eficiente para sus pacientes.",
                  },
                ]}
              />
            </section>
          </Col>
        </Row>

        <Row>
          <Col className={styles.imageGallery}>
            <ImageGallery
              images={[
                {
                  thumbnail: "/images/cirugia.jpg",
                  full: "/images/cirugia.jpg",
                  description: "Cirugía",
                  alt: "Cirugía",
                },
                {
                  thumbnail: "/images/cirugia_robotica.jpg",
                  full: "/images/cirugia_robotica.jpg",
                  description: "Cirugía robótica",
                  alt: "Cirugía robótica",
                },
                {
                  thumbnail: "/images/hospital.jpg",
                  full: "/images/hospital.jpg",
                  description: "Trabajo en hospital",
                  alt: "Trabajo en hospital",
                },
                {
                  thumbnail: "/images/udla.jpg",
                  full: "/images/udla.jpg",
                  description: "Maestría en Gerencia de Instituciones de Salud",
                  alt: "Maestría en Gerencia de Instituciones de Salud",
                },
              ]}
            />
          </Col>
        </Row>

        {/* Componente de información de pago */}

        <Row>
          <Col className={styles.paymentSection}>
            <section id="payment" className={styles.paymentInfo}>
              <div className={styles.paymentTitle}>
                <h2>Información de Pago</h2>
                <span>Haz clic en el logo para acceder a los datos de la cuenta</span>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <div className={styles.bankInfo}>
                  <PaymentInfo
                    bankName="Banco Pichincha"
                    accountNumber="123456789"
                    identification="123456"
                    email="contacto@bancoxyz.com"
                    bankLogo="/images/banco_pichincha.png"
                  />
                </div>
              </motion.div>
            </section>
          </Col>
        </Row>

        {/* Componente de video player */}

        <Row>
          <Col className={styles.videoPlayer}>
            <VideoPlayer videoUrl="/video/cirugia_proceso.mp4" />
          </Col>
        </Row>

        {/* Componente de QR Code */}
        <Row>
          <Col className={styles.qrCode}>
            <section id="qrCode">
              <QRCodeComponent qrCodeImageUrl="/images/qrcode_1.png" altText="QR Code" />
            </section>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
