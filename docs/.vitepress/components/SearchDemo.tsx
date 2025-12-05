import React from 'react';
import { Chrono } from 'react-chrono';

const items = [
    {
        title: "1",
        cardTitle: "AI and Machine Learning",
        cardSubtitle: "Breakthrough Technologies",
        cardDetailedText: "Exploring cutting-edge developments in artificial intelligence, machine learning algorithms, and neural networks. Key topics include deep learning, natural language processing, and computer vision.",
    },
    {
        title: "2",
        cardTitle: "Mobile App Release",
        cardSubtitle: "Cross-Platform Development",
        cardDetailedText: "Launching our new mobile application with features including real-time synchronization, offline mode, and advanced analytics dashboard.",
    },
    {
        title: "3",
        cardTitle: "Data Science Symposium",
        cardSubtitle: "Big Data Analytics",
        cardDetailedText: "Presenting research on big data processing, distributed computing, cloud infrastructure, and scalable database solutions for enterprise applications.",
    },
    {
        title: "3",
        cardTitle: "Agile Methodology Training",
        cardSubtitle: "Process Optimization",
        cardDetailedText: "Interactive workshop covering agile development practices, scrum framework, sprint planning, and continuous integration strategies.",
    },
    {
        title: "4",
        cardTitle: "Technology Showcase",
        cardSubtitle: "Innovation Display",
        cardDetailedText: "Demonstrating latest innovations in software development, cloud computing, cybersecurity solutions, and blockchain technology applications.",
    },
];

export default function SearchDemo() {
    return (
        <div style={{ width: '100%', minHeight: '650px', margin: '20px 0' }}>
            <Chrono
                items={items}
                mode="vertical"
                interaction={{
                    focusOnLoad: false
                }}
                layout={{
                    cardHeight: 200
                }}
                i18n={{
                    texts: {
                        search: {
                            placeholder: "Search events, technologies, topics...",
                            ariaLabel: "Search timeline content",
                            clearLabel: "Clear"
                        }
                    }
                }}
            />
        </div>
    );
}
