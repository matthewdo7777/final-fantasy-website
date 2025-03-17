import React from 'react';

import { useState } from "react"

const ffCharacters = [
    {
        id: 1,
        name: 'Cloud Strife',
        image: '/img/cloud-1.jpg',
        image2: '/img/cloud-2.jpg',
        description: 'The main protagonist of Final Fantasy VII, Cloud is a mercenary who claims to be a former First Class SOLDIER. He wields a massive sword and wears a distinctive set of armor that makes him look like a knight.'
    },
    {
        id: 2,
        name: 'Barret Wallace',
        image: '/img/barret-1.jpg',
        image2: '/img/barret-2.jpg',
        description: "This is the planet we're talkin' about! Y'all know she's gonna pour her heart and soul into this fight!",
    },
    {
        id: 3,
        name: 'Tifa Lockhart',
        image: '/img/tifa-1.jpg',
        image2: '/img/tifa-2.jpg',
        description: "Ever wish you could just snap your fingers and forget the worst stuff?",
    },
    {
        id: 4,
        name: 'Aerith Gainsborough',
        image: '/img/aerith-1.jpg',
        image2: '/img/aerith-2.jpg',
        description: "Just look at it all... A living, breathing planet. Even after everything we've done to it, it's still going strong.",
    },
    {
        id: 5,
        name: 'Yuffie Kisaragi',
        image: '/img/yuffle-1.jpg',
        image2: '/img/yuffle-2.jpg',
        description: "If I win, you get the honor of serving yours truly!",
    },
];

const Character = () => {

    const [selectedCharacter, setSelectedCharacter] = useState(ffCharacters[0])
    
    const handleClick = (character) => {
        setSelectedCharacter(character)
    };


    return (
        <section id="characters">
            <div className="h-screen w-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden">
                <div className="relative w-full h-full flex flex-col items-center">
                    <div className="absolute top-70 left-20 max-w-md z-10">
                        <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border-l-4">
                            <h2 className="text-4xl font-bold text-white tracking-wider mb-2">{selectedCharacter.name}</h2>
                            <p className="text-white/90 text-lg leading-relaxed">{selectedCharacter.description}</p>
                        </div>
                    </div>

                    <div className="relative w-full h-full">
                        <div className="w-full h-full flex items-center justify-center">
                            <img src={selectedCharacter.image2} alt={selectedCharacter.name} className="h-full object-contain" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                            <div className="flex justify-center gap-6 py-20">
                                {ffCharacters.map((character) => (
                                    <button onClick={() => handleClick(character)}>
                                        <img key={character.id} src={character.image} alt={character.name} className="w-40 h-40 object-cover border-2 rounded-md hover:scale-110 transition-transform duration-300" />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Character;
