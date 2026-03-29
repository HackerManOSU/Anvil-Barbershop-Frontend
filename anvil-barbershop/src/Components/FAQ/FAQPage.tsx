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
        marginBottom: '16px',
    };

    const titleTypographyStyles = {
        color: 'black',
        fontWeight: '700',
    };

    const typographyStyles = {
        color: 'black',
    };

    return (
        <section className='text-white bg-anvilBackground flex flex-col items-center min-h-[100vh] px-3 sm:px-5 pb-16'>
            <h1 className='text-5xl sm:text-7xl text-anvilRed mt-12 text-center'>FAQ</h1>

            <p className='font-barber mt-4 mb-12 text-3xl text-center'>Helpful answers before your visit</p>

            <div className='w-full max-w-[1000px]'>
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
                    <Typography sx={titleTypographyStyles}>Do you guys accept debit or credit card?</Typography>
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
                    <Typography sx={titleTypographyStyles}>What types of hair do you cut?</Typography>
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
                    id="panel3a-header"
                >
                    <Typography sx={titleTypographyStyles}>What services do you offer?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={typographyStyles}>
                        We offer traditional haircuts, beard trims, and straight razor shaves. We specialize in classic and timeless styles, but can accommodate modern cuts as well.                    
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
                    id="panel5a-header"
                >
                    <Typography sx={titleTypographyStyles}>Do you offer shaves or beard trims?</Typography>
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
                    id="panel6a-header"
                >
                    <Typography sx={titleTypographyStyles}>How long has your barbershop been in business?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={typographyStyles}>
                        We have over 15 years of experience providing high-quality haircuts and grooming services to our community.                    
                    </Typography>
                </AccordionDetails>
            </Accordion>
            </div>

        </section>

    );
};

export default FAQPage;