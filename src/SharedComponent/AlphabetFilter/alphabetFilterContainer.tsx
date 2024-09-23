import React, { useState } from 'react';
import { Button, Space } from 'antd'; // or other AntD components
import styles from './AlphabetFilter.module.scss';
import {useRouter} from "next/router"; // if using SCSS modules

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

interface AlphabetFilterProps {
    onFilter: (letter: string) => void; // Callback to pass the selected letter to the parent component
}

const AlphabetFilter: React.FC<AlphabetFilterProps> = ({ onFilter }) => {

    const {query,push}=useRouter()
    const selectedLetter=query?.selectedLetter




    const handleLetterClick = (letter: string) => {
        onFilter(letter);
    };

    return (
        <Space>
            {alphabet.map((letter) => (
                <Button
                    key={letter}
                    type={selectedLetter === letter ? 'primary' : 'default'}
                    onClick={() => handleLetterClick(letter)}
                    className={styles.letterButton}
                >
                    {letter}
                </Button>
            ))}
        </Space>
    );
};

export default AlphabetFilter;
