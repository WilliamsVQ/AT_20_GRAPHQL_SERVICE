/*
@node_command.js Copyright (c) 2023 Jalasoft
2643 Av Melchor Perez de Olguin, Colquiri Sud, Cochabamba, Bolivia.
Av. General Inofuentes esquina Calle 20, Edificio Union No 1376, La Paz, Bolivia All rights reserved
This software is the confidential and proprietary information of
Jalasoft, Confidential Information "). You shall not
disclose such Confidential Information and shall use it only in
accordance with the terms of the license agreement you entered into with Jalasoft
*/

import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Questions from "./Questions.json";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import { Box } from '@mui/system';

// builds the reasoning test page
const Aptitude = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
    const [selectedOptions, setSelectedOptions] = React.useState({});
    const handleNextQuestion = () => {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    };

    const handlePreviousQuestion = () => {
        setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    };

    const handleSelectAnswer = (event) => {
    const { name, value, type, checked } = event.target;
    // saves an array when is a checkbox in the selectedOptions object
    if (type === "checkbox") {
        setSelectedOptions((prevSelectedOptions) => {
            const prevSelectedValues = prevSelectedOptions[name] || [];
            let updatedSelectedValues;
    
            if (checked) {
                updatedSelectedValues = [...prevSelectedValues, value];
                } else {
                updatedSelectedValues = prevSelectedValues.filter(
                    (selectedValue) => selectedValue !== value
                );
            }
    
            return {
                ...prevSelectedOptions,
                [name]: updatedSelectedValues,
            };
        });
        // saves a data when is a radio in the selectedOptions object
        } else if (type === "radio") {
            setSelectedOptions((prevSelectedOptions) => ({
                ...prevSelectedOptions,
                [name]: value,
            }));
        }
    };
    const currentQuestion = Questions[currentQuestionIndex];

    return (
    <>
        <Typography variant="h2" gutterBottom align="center">Reasoning test</Typography>
        <Box style={{marginLeft: '20px'}}>
            <Typography variant="h3" gutterBottom>Please answer the following question:</Typography>
            <Typography variant="h4" gutterBottom>
                {currentQuestion.question}
            </Typography>
            <FormControl component="fieldset">
            {currentQuestion.type === "radioButton" && (
            <RadioGroup
            aria-label="quiz"
            name={`${currentQuestionIndex}`}
            value={selectedOptions[`${currentQuestionIndex}`] || ""}
            onChange={handleSelectAnswer}
            >
                {currentQuestion.options.map((option, index) => (
                    <FormControlLabel
                    key={index}
                    value={option.value}
                    control={<Radio />}
                    label={option.label}
                    />
                ))}
            </RadioGroup>
            )}
            {currentQuestion.type === "checkBox" && (
            <FormGroup>
                {currentQuestion.options.map((option, index) => (
                <FormControlLabel
                    key={index}
                    control={
                    <Checkbox
                        checked={
                            selectedOptions[`${currentQuestionIndex}`] &&
                            selectedOptions[`${currentQuestionIndex}`].includes(
                                option.value
                            )
                        }
                        onChange={handleSelectAnswer}
                        name={`${currentQuestionIndex}`}
                        value={option.value}
                    />
                    }
                    label={option.label}
                />
                ))}
            </FormGroup>
            )}
            </FormControl>
            <Stack spacing={2} direction="row">
                {currentQuestionIndex > 0 && (
                    <Button variant="contained" onClick={handlePreviousQuestion}>
                        Previous
                    </Button>
                )}
                {currentQuestionIndex < Questions.length - 1 && (
                    <Button variant="contained" onClick={handleNextQuestion}>
                        Next
                    </Button>
                )}
                {currentQuestionIndex === Questions.length - 1 && (
                    <Button variant="contained">Submit</Button>
                )}
            </Stack>
        </Box>
    </>
    );
};

export default Aptitude;
