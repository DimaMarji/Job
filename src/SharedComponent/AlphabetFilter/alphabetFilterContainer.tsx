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
        <Space className={styles.alphabetFilter}>
            {alphabet.map((letter) => (
                <div
                    key={letter}
                    onClick={() => handleLetterClick(letter)}
                    className={`${selectedLetter === letter ? styles.selectedLetter:""} ${styles.letterButton}`}
                >
                    {letter}
                </div>
            ))}
        </Space>
    );
};

export default AlphabetFilter;
