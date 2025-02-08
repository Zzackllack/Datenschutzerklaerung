import React from "react";
import styles from "./PrivacyPolicy.module.css";

interface PrivacyPolicyEnhancedProps {
  /**
   * Plain text content.
   */
  text?: string;
  /**
   * HTML content to be rendered.
   */
  htmlContent?: string;
}

const PrivacyPolicyEnhanced: React.FC<PrivacyPolicyEnhancedProps> = ({ text, htmlContent }) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.header}>Privacy Policy</h2>
      <div className={styles.content}>
        {htmlContent ? (
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        ) : (
          text
        )}
      </div>
    </section>
  );
};

export default PrivacyPolicyEnhanced;