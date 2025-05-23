import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import "../styles/JoinUs.css";
import joinImage from "../assets/joinus.png";
import outreach1 from "../assets/outreach1.png";
import outreach2 from "../assets/outreach2.png";
import outreach4 from "../assets/_EFO7190.jpg";

const JoinUs = () => {
  const images = [
    { src: outreach1, alt: 'Outreach Program 1' },
    { src: outreach2, alt: 'Outreach Program 2' },
    { src: outreach4, alt: 'Outreach Program 3' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);


    const goToPrevious = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const goToNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Automatically go to next slide every 7 seconds
    useEffect(() => {
      const intervalId = setInterval(goToNext, 5000); // 7000ms = 7 seconds
      return () => clearInterval(intervalId); // Cleanup on component unmount
    }, [currentIndex, goToNext]); // This will re-run whenever currentIndex changes
  
    return (
      <section className="join-us">
        <div className="banner-container">
          <img
            src={joinImage}
            alt="Join Cadillo Lab"
            className="banner-image"
          />
        </div>

        <div className="content-wrapper">
          <div className="welcome-section">
            <p className="common-text">
              The Cadillo lab is a young and vibrant group and we are always
              looking for talented students, postdocs, and international
              visitors!
            </p>
            <p className="common-text">
              Browse our Research pages, so you can familiarize yourself with
              our interests and the recent research projects conducted in our
              lab.
            </p>
          </div>

          <div className="opportunity-item-1">
            <h2>Graduate Student Opportunities</h2>
            <div className="opportunity-content">
              <p className="common-text">
                Graduate students in our lab benefit from a mixed source of
                funding that includes fellowships, teaching, and research
                assistantships.
              </p>
              <p className="common-text">
                Students are accepted into our lab through programs from the
                Graduate College and the School of Life Sciences. See the linked
                information for SOLS, Graduate College, and Biological Design
                Program.
              </p>
              <h4>
                Professor Cadillo is a faculty member in the following programs:
              </h4>
              <p className="common-text">
                <a
                  href="https://degrees.apps.asu.edu/masters-phd/major/ASU00/LAELSPHD/environmental-life-sciences-phd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Environmental Life Sciences
                </a>
                ,
                <a
                  href="https://degrees.apps.asu.edu/masters-phd/major/ASU00/LAMICROPHD/microbiology-phd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Microbiology PhD
                </a>
                ,
                <a
                  href="https://degrees.apps.asu.edu/masters-phd/major/ASU00/LACELLPHD/molecular-cellular-biology-phd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Molecular and Cellular Biology
                </a>
                ,
                <a
                  href="https://sols.asu.edu/degree/graduate/biology-phd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Biology PhD
                </a>
                ,
                <a
                  href="https://sols.asu.edu/degree/graduate/biology-biology-and-society-phd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Biology and Society PhD
                </a>
                ,
                <a
                  href="https://degrees.apps.asu.edu/masters-phd/major/ASU00/ESBDEMS/biological-design-ms"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Biological Design Program
                </a>
                ,
                <a
                  href="https://degrees.apps.asu.edu/masters-phd/major/ASU00/ESEVEMS/environmental-engineering-ms"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Environmental Engineering
                </a>
              </p>
              <p className="common-text">
                Get in touch with Prof. Cadillo as early as possible and start a
                conversation about plans and options!
              </p>
              <div style={{ marginTop: "10px", textAlign: "left" }}>
                <details
                  style={{
                    color: "black",
                    padding: "10px",
                    borderRadius: "5px",
                    fontWeight: "bold",
                  }}
                >
                  <summary style={{ cursor: "pointer" }}>Position</summary>
                  <p className="common-text" style={{ marginTop: "10px" }}>No positions available</p>
                </details>
              </div>
            </div>

            <div className="opportunity-item-2">
              <h2>Postdoctoral Positions</h2>
              <div className="opportunity-content">
                <p className="common-text">
                  We are looking for highly motivated graduates with experience
                  in ecosystems ecology, anaerobic microbiology,
                  genomics/metagenomics, geomicrobiology/stable isotopes, or
                  soil ecology to join current efforts or to propose new
                  projects. Get in touch asap with Prof. Cadillo to discuss
                  current or upcoming possibilities.
                </p>
              </div>
              <div style={{ marginTop: "10px", textAlign: "left" }}>
                <details
                  style={{
                    color: "black",
                    padding: "10px",
                    borderRadius: "5px",
                    fontWeight: "bold",
                  }}
                >
                  <summary style={{ cursor: "pointer" }}>Position</summary>
                  <p style={{ marginTop: "10px" }}>2025 position available</p>
                   <p className="common-text">
                  The Cadillo Lab at the School of Life Sciences at Arizona State University is seeking a postdoctoral researcher to lead efforts to advance our understanding of microbial physiology, gene expression and cellular modeling, and microbial ecology of methanogens and methanotrophs in soils.

Terrestrial ecosystems are responding to climate change in a broad range of ways, and feedbacks leading to ecosystem transitions from greenhouse gas sinks to sources demand immediate attention. Forested ecosystems like transitional sub-boreal forests provide a critical case to study transitions from methanotrophic to methanogenic activities and microbial functioning relevant to large areas of northern forests.

We are part of a collaborative effort (NSF-funded project) bringing together researchers from five institutions (ASU, SDU, UM, UNC and Woodwell Climate Research Center as lead) to evaluate how environmental controls merge with biological processes and thus decipher the mechanisms and functional relationships driving CH4 sink/source activity from the microsite to landscape level in the Howland Research Forest. This project will integrate multi-scale field- and lab-based experimental observations of CH4 production, CH4 oxidation, stable carbon isotopes, microbial analysis, and modeling.
 
Essential duties
1.       Develop experimental and computational analysis to integrate microbial communities (metagenomes), operational genes (functional markers), and traits (kinetics) in culture and culture-free approaches to predict activity rates of microbial guild under field conditions.
2.       Evaluate field and lab-based gene expression patterns to predict guild activity rates based on ecophysiological microbial modeling.

3.       Write scientific papers associated with the research.
4.       Travel to fieldwork activities and meetings to present results.
5.       Be an active member in research group activities (e.g., participate in lab meetings, mentor students, contribute to lab governance).
 
Qualifications

Minimum Qualifications
1.  Successful candidates must have earned a doctoral degree or the equivalent terminal degree in a relevant area, such as Microbiology, Molecular Biology, Bioinformatics, Environmental Sciences, Ecosystem Sciences, or Environmental Engineering, at the time of appointment.

2.  Demonstrated dedication to solving microbial physiology and contributions to ecosystem problems through research and scholarship.

3.  Must have the capacity to work effectively in interdisciplinary teams.

4.   A demonstrated record of scholarly achievement, excellent communication skills, and proficiency in both written and spoken English.
 
Desired qualifications
1.	Candidates with expertise in microbial communities, microbial gene expression and physiology, microbial ecology, or computational or experimental genomics in the context of responses to environmental change, will be preferred.
2.	Strong candidates should possess: (A) a significant publication record (papers published, in press, or submitted), (B) creativity, independence, and the desire to learn, (C) abilities to design molecular and genomic evaluations, and (D) analytical, interpersonal, and presentation skills.
3.	Demonstrated commitment to working with faculty, staff, students and communities to advance the ASU Charter.
Application Instructions
The application is currently on a rolling basis. Selected applicants will be invited to provide the following materials before interviews.
1.	A cover letter and research interests. Applicants should describe their experience and suitability for the position. This piece should highlight the strengths of the applicant’s experience in developing and implementing the proposed research.
2.	Curriculum vitae or resume.
3.	Contact information (name, email, and phone) for three references who may be contacted at a later stage of consideration.
4.	A brief description of past research accomplishments and future research goals.
                </p>
                </details>
              </div>
            </div>

            <div className="opportunity-item-3">
              <h2>Undergraduate Research Opportunities</h2>
              <div className="opportunity-content">
                <p className="common-text">
                  Send us an email introducing yourself, include your year and
                  major, and why you are interested in working in our lab.
                  Include a resume that highlights relevant coursework or
                  research experience. The subject line should read
                  “Undergraduate Research Opportunity Inquiry.” Emails can be
                  sent to either Professor Hinsby or a graduate student you are
                  interested in working with.
                </p>
                <p className="common-text">
                  Understand that undergraduate students have responsibilities
                  in the lab and are required to balance these with their
                  academic workload.
                </p>
                <p className="common-text">
                  Ensure that you are up to date on safety trainings (Hazardous
                  waste management, fire safety, and biosafety and bloodborne
                  pathogens). These will need to be completed before working in
                  the lab.
                </p>

                <div style={{ marginTop: "10px", textAlign: "left" }}>
                  <details
                    style={{
                      color: "black",
                      padding: "10px",
                      borderRadius: "5px",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    <summary style={{ outline: "none" }}>Position</summary>
                    <p style={{ marginTop: "10px" }}>No positions available</p>
                  </details>
                </div>

                <h4>Additional Opportunities for Involvement:</h4>

                <ul>
                  <li>
                    <strong>SOLUR Program:</strong> The School of Life Sciences
                    Undergraduate Research (SOLUR) program at ASU offers
                    undergraduates the chance to dive deep into biological
                    research. Collaborate with faculty and mentors, experience
                    firsthand scientific investigations, and make valuable
                    contributions to ongoing research. We are always happy to
                    accept students from this program.{" "}
                    <a
                      href="https://sols.asu.edu/research/solur"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn more about the SOLUR program
                    </a>
                    .
                  </li>
                  <li>
                    <strong>RISE Worldwide Internships:</strong> RISE (Research
                    Internships in Science and Engineering) Worldwide offers
                    summer research internships globally to undergraduate
                    students, especially those with training in fields like
                    biology, chemistry, computer science, physics, and earth
                    sciences. We have successfully sponsored many students
                    through this program and welcome more applicants.{" "}
                    <a
                      href="https://www.daad.de/rise/en/rise-worldwide/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn more about RISE Worldwide internships
                    </a>
                    .
                  </li>
                  <li>
                    <strong>WAESO LSAMP Program:</strong> The Western Alliance
                    to Expand Student Opportunities Louis Stokes Alliances for
                    Minority Participation (WAESO LSAMP) is an NSF-funded
                    consortium promoting STEM fields, particularly focusing on
                    historically underrepresented individuals. We always have
                    opportunities through WAESO and are eagerly looking for
                    students to join.{" "}
                    <a
                      href="https://www.waeso.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn more about WAESO LSAMP
                    </a>
                    .
                  </li>
                </ul>
              </div>
            </div>

            <div className="opportunity-item-4">
              <h2>International Collaborations and Visitors</h2>
              <div className="opportunity-content">
                <p className="common-text">
                  Our lab is always welcoming international collaborations and
                  visitors.
                </p>
                <p className="common-text">
                  We host visiting professors and scholars, commonly under the
                  financial sponsorship of their home organizations, with a
                  focus on training and joint research. Contact Professor
                  Cadillo about opportunities and interests.
                </p>
                <p className="common-text">
                  We also host international internships, such as those
                  sponsored by the{" "}
                  <a
                    href="https://www.daad.de/rise/en/rise-worldwide/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DAAD RISE-Worldwide program
                  </a>
                  , Chinese Exchange programs (several of them especially for
                  faculty), and REPU. We post positions through each of these
                  programs, so be sure to visit their websites.
                </p>
                <p className="common-text">
                  If you have any questions or want to know more about our lab,
                  feel free to contact any of the lab members; we will be more
                  than happy to get in touch with you!
                </p>
              </div>
            </div>
          </div>

          <div className="outreach-section">
            <div className="carousel">
              <div className="carousel-images">
                <img
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  className="carousel-slide"
                />
              </div>

              <button
                onClick={goToPrevious}
                className="arrow arrow-left"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={goToNext}
                className="arrow arrow-right"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };

export default JoinUs;
