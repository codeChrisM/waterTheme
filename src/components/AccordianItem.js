import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordionItem = ({ question, answer }) => {
  return (
    <Accordion style={{ backgroundColor: "100%" }} ClassName="accordion">
      <AccordionSummary
        style={{
          backgroundColor: "#eff",
          color: "black",
          borderBottom: "1px solid white",
        }}
        className="accordionSummary "
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel-content"
        id="panel-header"
      >
        <Typography>{question}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography
          style={{
            borderTop: "1px solid gray",
            padding: "1em",
            backgroundColor: "#edefef",
            borderRadius: "10%",
          }}
        >
          {answer}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionItem;
