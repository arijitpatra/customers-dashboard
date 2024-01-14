import styles from "./Record.module.scss";
import {
  MdArrowDropDown,
  MdArrowDropUp,
  MdArrowOutward,
  MdBusinessCenter,
  MdDelete,
  MdEdit,
} from "react-icons/md";
import Pill from "../Pill";
import { Link } from "react-router-dom";
import { useContextData } from "../../context/DataContext";
import { deleteCustomer } from "../../utils";
import { useState } from "react";
import { CompanyData } from "../../types/index.ts";

interface RecordProps {
  data: CompanyData;
}

const Record = ({ data }: RecordProps) => {
  const { contextData, updateContextData } = useContextData();
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section
      className={`${styles.record} ${
        data.isActive ? styles.active : styles.inactive
      }`}
    >
      <div className={`${styles.recordLayout}`}>
        <div>
          <Link to={`view/${data.id}`}>
            <div>
              <MdBusinessCenter className="react-icons fs-xl" />
            </div>
            <div className={`${styles.company}`}>
              {data.company}
              <MdArrowOutward className="react-icons" />
            </div>
          </Link>
          <div>
            <Pill>{data.industry}</Pill>
          </div>
          <div
            role="button"
            className={`${styles.toggleButton}`}
            onClick={(e) => {
              setShowDetails(!showDetails);
              e.preventDefault();
            }}
          >
            {showDetails ? "less" : "more"}
            {showDetails ? (
              <MdArrowDropUp className="react-icons" />
            ) : (
              <MdArrowDropDown className="react-icons" />
            )}
          </div>
        </div>
        <div>
          <Link to={`edit/${data.id}`}>
            <MdEdit
              className="react-icons icon-button fs-l"
              title="edit"
              aria-label="edit"
            />
          </Link>
          {data.isActive === false ? (
            <MdDelete
              style={{ marginLeft: "15px" }}
              className="react-icons icon-button delete fs-l"
              title="delete"
              aria-label="delete"
              onClick={(e: React.MouseEvent) => {
                e.preventDefault();
                if (
                  confirm(
                    `Are you sure you want to delete ${data.company}?`
                  ) === true
                ) {
                  updateContextData(deleteCustomer(data.id, contextData));
                }
              }}
            />
          ) : null}
        </div>
      </div>
      {showDetails ? (
        <div className={`${styles.detailsRow}`}>
          <div>
            <small>ID</small>
            <div>{data.id}</div>
          </div>
          <div>
            <small>ABOUT</small>
            <div>{data.about}</div>
          </div>
          <div>
            <small>PROJECT(S)</small>
            <div>{data?.projects?.length ?? 0}</div>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default Record;
