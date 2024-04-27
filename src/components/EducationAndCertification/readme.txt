Componente que muestra los títulos y certificados del usuario.

Cuenta con un título de sección, una imagen y el título profesional.

Al hacer clic despliega un modal con la información detallada.

Este es el uso del componente en el index o en otra página que lo requiera


{/* Componente de educación y certificaciones */}

          <section id="education" className={styles.educationSection}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Row>
                <Col>
                  <div>
                    <h2 className={styles.educationTitle}>Educación y Certificaciones</h2>
                  </div>

                  <div className={styles.educationInfo}>
                    <EducationAndCertifications items={educationData} />
                  </div>
                </Col>
              </Row>
            </motion.div>
          </section>

// ---------------------------------------------
// Education Section
// ---------------------------------------------

.educationSection{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: $spacing-4;
  width: 100%;
  height: auto;
  background-color: $secondary-color;

  .educationTitle {
    font-family: $font-primary;
    font-size: 2rem;
    color: $dark-color;
    text-align: center;
    margin-bottom: $spacing-5;
  }
}
