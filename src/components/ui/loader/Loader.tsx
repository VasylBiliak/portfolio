import React from "react";
import * as styles from "./loader.module.css";
import ElectricBorder from "@components/ui/ElectricBorder/ElectricBorder";

interface LoaderProps {
  fullScreen?: boolean;
}

const Loader: React.FC<LoaderProps> = ({ fullScreen = false }) => {

  return (
    <div className={styles.loaderWrap}
      role="status" aria-label="Loading">
      <div className={styles.loader}>


        <ElectricBorder
          color="#0f785c"
          speed={1.9}
          chaos={0.5}
          style={{
            borderRadius: 100,
            minHeight: "160px",
            minWidth: "160px",
          }}
        >
          <span className={styles.loaderText}>Loading...</span>
        </ElectricBorder>

      </div>

    </div>
  );
};

export default Loader;
