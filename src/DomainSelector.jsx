import React, { useState } from 'react';
import unStop from './assets/unStop.webp';
import './App.css';

const DomainSelector = () => {
    const domainNames = [
        'Education',
        'Health',
        'Finance',
        'Entertainment',
        'Tourism'
    ];

    const [countdown, setCountdown] = useState(null);
    const [selectedDomain, setSelectedDomain] = useState('');

    const selectRandomDomain = () => {
        setCountdown(5);
        setSelectedDomain('');

        const interval = setInterval(() => {
            setCountdown((prev) => {
                if (prev > 1) {
                    return prev - 1;
                } else {
                    clearInterval(interval);
                    const randomDomain = domainNames[Math.floor(Math.random() * domainNames.length)];
                    setSelectedDomain(randomDomain);
                    return null;
                }
            });
        }, 2000);
    };

    return (
        <div className='container'>
            <div className="header">
                <h1>HackWave 1.0</h1>
                <h2>Sri Vasavi Engineering College - Department of CAI, AI & ML</h2>
            </div>

            <div className='domain-list'>
                {(!selectedDomain && !countdown) ? (
                    <>
                        <h2>Domain List</h2>
                        <ul>
                            {domainNames.map((domain, index) => (
                                <li key={index}>
                                    <span>{domain}</span>
                                </li>
                            ))}
                        </ul>
                    </>
                ) : (
                    <div id="result" className='result'>
                        {countdown !== null && (
                            <div className="countdown-circle">{countdown}</div>
                        )}
                        {selectedDomain && (
                            <h2 className="reveal-animation">{selectedDomain}</h2>
                        )}
                    </div>
                )}
            </div>

            <p className='selector'>Click below to reveal your challenge domain...!</p>
            <button onClick={selectRandomDomain} className='select-btn'>Reveal a Magical Domain</button>

            <div className="powered-by">
                <div>
                    <p>Powered by</p>
                    <img src={unStop} alt="Powered by Unstop" />
                </div>
            </div>
        </div>
    );
};

export default DomainSelector;
