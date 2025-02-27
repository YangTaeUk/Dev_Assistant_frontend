import React, { useContext } from "react";
import { Link, Box } from "@mui/material";
import { ThemeContext } from "../ThemeContext";
import ReactMarkdown from "react-markdown";
import githubDark from "../assets/image/githubdark.svg"; 
import githubLight from "../assets/image/githublight.svg"; 

const LinkMessage = ({ content }) => {
    const { darkMode } = useContext(ThemeContext);

    return(
        <Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
                component="img"
                src={darkMode ? githubLight : githubDark}
                alt="GitHub Logo"
                sx={{ width: 28, height: 28, mr: 1}}
            />
            <ReactMarkdown>{`### 깃허브 주소`}</ReactMarkdown>
            </Box>
            <ReactMarkdown>{`---`}</ReactMarkdown>
            <ReactMarkdown
            components={{
                a: ({ node, ...props }) => (
                <Link
                    {...props}
                    sx={{
                    color: darkMode ? "#fff" : "#1976d2", 
                    textDecoration: "none",
                    ":hover": { textDecoration: "underline" }
                    }}
                />
                ),
            }}
            >
            {`🔗 [${content}](${content})`}
            </ReactMarkdown>
        </Box>
    );
};

export default LinkMessage;

