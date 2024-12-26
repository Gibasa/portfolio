import { useState, useEffect } from "react";
import './Cookie.css'; // Importe o arquivo CSS

const Cookie = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    if (!cookiesAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", true);
    setIsVisible(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  if (!isVisible) return null;

  return (
    <>
      <div className="banner">
        <p>
          This website uses cookies to enhance your experience. By continuing to browse the site, you agree to our use of cookies and our privacy policy.{" "}
          <button className="button" onClick={handleShowModal}>Learn more</button>
          <button className="button" onClick={handleAccept}>Accept</button>
        </p>
      </div>

      {showModal && (
        <>
          <div className="modal-backdrop" onClick={handleCloseModal} />
          <div className="modal">
            <h2>Privacy Policy and Cookie Usage</h2>
            <p>
              We respect your privacy and are committed to protecting your personal data. This website uses cookies to improve your browsing experience, analyze website traffic, and provide personalized content and advertisements, in compliance with the Brazilian General Data Protection Law (LGPD), the European General Data Protection Regulation (GDPR), and other applicable privacy laws.
            </p>
            <h3>What are cookies?</h3>
            <p>
              Cookies are small text files stored on your device when you visit a website. They help us remember your preferences, understand how you use our site, and improve your experience.
            </p>
            <h3>Why do we use cookies?</h3>
            <p>
              We use cookies for the following purposes:
              <ul>
                <li>To enhance user experience on our site.</li>
                <li>To analyze traffic and behavior on our website for performance improvements.</li>
                <li>To provide personalized content and advertisements based on your preferences.</li>
              </ul>
            </p>
            <h3>Your Rights under the LGPD, GDPR, and Other Laws</h3>
            <p>
              Under the Brazilian General Data Protection Law (LGPD), the European General Data Protection Regulation (GDPR), and other applicable privacy laws, you have the right to:
              <ul>
                <li>Access your personal data and request information on how it is being used.</li>
                <li>Correct inaccurate or incomplete data.</li>
                <li>Request the deletion of your personal data under certain circumstances.</li>
                <li>Withdraw your consent for data processing at any time.</li>
                <li>Request a copy of your personal data in a structured and machine-readable format.</li>
                <li>Opt-out of personalized advertising and profiling.</li>
              </ul>
            </p>
            <h3>Data Protection and International Transfers</h3>
            <p>
              We are committed to safeguarding your data. However, your personal data may be transferred to and processed in countries outside of your jurisdiction, including countries where data protection laws may differ from those in your country. We ensure that any such transfers comply with applicable data protection laws, including the LGPD, GDPR, and others.
            </p>
            <h3>Contact Us</h3>
            <p>
              For any inquiries regarding your personal data or if you wish to exercise any of your rights under the applicable laws, you can contact us at <strong>gibasa@gmail.com</strong>.
            </p>
            <button className="button" onClick={handleCloseModal}>Close</button>
          </div>
        </>
      )}
    </>
  );
};

export default Cookie;
