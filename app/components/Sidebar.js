import React, { useState } from 'react';
import styles from '../styles/Sidebar.module.css';

const Sidebar = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections({
      ...openSections,
      [section]: !openSections[section],
    });
  };

  return (
    <div className={styles.sidebar}>
      <h3 className={styles.itemCount}>3425 ITEMS</h3>
      <a href="#" className={styles.filterToggle}>
        HIDE FILTER
      </a>

      {/* Customizable Filter */}
      <div className={styles.filterGroup}>
        <label className={styles.customizable}>
          <input type="checkbox" /> CUSTOMIZABLE
        </label>
      </div>

      {/* Dropdown Sections */}
      {[
        'Ideal For',
        'Occasion',
        'Work',
        'Fabric',
        'Segment',
        'Suitable For',
        'Raw Materials',
        'Pattern',
      ].map((section) => (
        <div className={styles.filterGroup} key={section}>
          <div
            className={styles.filterHeader}
            onClick={() => toggleSection(section)}
          >
            <span>{section.toUpperCase()}</span>
            <span>{openSections[section] ? '▲' : '▼'}</span>
          </div>
          {openSections[section] && (
            <div className={styles.filterOptions}>
              <p>All</p>
              {/* Add more options here */}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
