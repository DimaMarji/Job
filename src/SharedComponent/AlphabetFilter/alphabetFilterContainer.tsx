import React, { useState } from 'react';
import { Space } from 'antd';
import styles from './AlphabetFilter.module.scss';
import {useRouter} from "next/router";
import {Button} from "../../Components/Atoms/Button";

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
                    type={selectedLetter === letter ? 'primary' : 'link'}
                    onClick={() => handleLetterClick(letter)}
                    className={`${selectedLetter === letter ? "selected":""} ${styles.letterButton}`}
                >
                    {letter}
                </Button>
            ))}
        </Space>
    );
};

export default AlphabetFilter;
