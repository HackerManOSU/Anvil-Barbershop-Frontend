import React, { useState } from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
  } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQPage: React.FC = () => {

    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange = (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
      };
    const accordionStyles = {
        backgroundColor: '#eee',
        color: 'white',
        border: '1px solid red',
    };

    const typographyStyles = {
        color: 'black',
    };

    return (
        <div className='text-white bg-anvilBackground flex flex-col items-center min-h-[100vh]'>
            
            <h1 className='text-8xl text-[red] mt-12'>
                Hours
            </h1>
            
            <h2 className='font-barber mt-4 mb-12 text-3xl'>
                Walk Ins Only
            </h2>

            <div className='w-[80%] max-w-[1000px]'>
            <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
                sx={accordionStyles}
                >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography sx={typographyStyles}>Do you guys accept debit or credit card?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={typographyStyles}>
                        No, we are a cash-only barbershop. Please ensure you bring cash to pay for your service.
                    </Typography>
                </AccordionDetails>
                </Accordion>

                <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
                sx={accordionStyles}
                >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography sx={typographyStyles}>What types of hair do you cut?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={typographyStyles}>
                        We cut all types of hair, regardless of texture or style. Our barbers have experience with diverse hair types and can provide the best service for everyone.                    
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
                sx={accordionStyles}
                >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel2a-header"
                >
                    <Typography sx={typographyStyles}>What services do you offer?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={typographyStyles}>
                        We offer traditional haircuts, beard trims, and straight razor shaves. We specialize in classic and timeless styles, but can accommodate modern cuts as well.                    
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
                sx={accordionStyles}
                >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4a-content"
                    id="panel2a-header"
                >
                    <Typography sx={typographyStyles}>Can I request a specific barber?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={typographyStyles}>
                        Yes, if you have a preferred barber, let us know when you arrive, and we’ll do our best to accommodate your request.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion
                expanded={expanded === "panel5"}
                onChange={handleChange("panel5")}
                sx={accordionStyles}
                >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel5a-content"
                    id="panel2a-header"
                >
                    <Typography sx={typographyStyles}>Do you offer shaves or beard trims?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={typographyStyles}>
                        Yes, we offer classic straight razor shaves as well as beard trims to keep you looking sharp.                   
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion
                expanded={expanded === "panel6"}
                onChange={handleChange("panel6")}
                sx={accordionStyles}
                >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel6a-content"
                    id="panel2a-header"
                >
                    <Typography sx={typographyStyles}>How long has your barbershop been in business?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={typographyStyles}>
                        We have over 10 years of experience providing high-quality haircuts and grooming services to our community.                    
                    </Typography>
                </AccordionDetails>
            </Accordion>
            </div>

        </div>

    );
};

export default FAQPage;