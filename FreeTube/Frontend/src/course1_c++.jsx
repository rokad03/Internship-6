import React, { useState, useEffect } from 'react';
import YoutubeEmbed from './YoutubeEmbed';
import Back from '../common/back/Back';


const CardWithCheckbox = ({ cardTitle, onCheckboxChange , embedId}) => {
  const localStorageKey = `checkbox-${cardTitle}`;
  const [isChecked, setIsChecked] = useState(
    localStorage.getItem(localStorageKey) === 'true'
  );

  const handleCheckboxChange = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    localStorage.setItem(localStorageKey, newCheckedState.toString());
    onCheckboxChange(newCheckedState);
  };

  return (
    <div className='card'>
       <YoutubeEmbed embedId={embedId} />
      <h2>{cardTitle}</h2>
      <div className='checkbox-container'>
        <input
          type='checkbox'
          checked={isChecked}
          onChange={handleCheckboxChange}
          id={`checkbox-${cardTitle}`}
        />
        <label htmlFor={`checkbox-${cardTitle}`}>Completed</label>
      </div>
    </div>
  );
};

const Course = () => {
  const [checkedCards, setCheckedCards] = useState(0);

  const handleCardCheckboxChange = (isChecked) => {
    setCheckedCards((prevCheckedCards) => (isChecked ? prevCheckedCards + 1 : prevCheckedCards - 1));
  };

  useEffect(() => {
    // Initialize the checked state of each card from localStorage upon component mount
    let initialCheckedCount = 0;
    const cardTitles = [
      'Introduction to C++, Installing',
  'Basic Structure of a C++ Program ' ,
  'Variables & Comments in C++ in Hindi'  ,
  'Variable Scope & Data Types in C++'  ,
  'C++ Basic Input/Output & More'  ,
  'C++ Header files & Operators' ,
  'C++ Reference Variables & Typecasting'  ,
  'Constants, Manipulators & Operator Precedence'  ,
  'If Else and Switch-Case Statement in C++' ,
  'Break and Continue Statements in C++'  ,
  'Pointers in C++'  ,
  'Arrays & Pointers Arithmetic in C++'  ,
  'Structures, Unions & Enums in C++' , 
  'Functions & Function Prototypes in C++'  
    
    ];

    cardTitles.forEach((cardTitle) => {
      const localStorageKey = `checkbox-${cardTitle}`;
      const storedValue = localStorage.getItem(localStorageKey);
      if (storedValue === 'true') {
        initialCheckedCount++;
      }
    });

    setCheckedCards(initialCheckedCount);
  }, []);

  const cardData = [
    // Your card data here...
    { embedId: 'j8nAHeVKL08', title: 'Introduction to C++, Installing' },
    { embedId: "oW2r0r_i5Ps", title: 'Basic Structure of a C++ Program ' },
    { embedId: "jigb6W35zHc", title: 'Variables & Comments in C++ in Hindi'  },
    { embedId: 'JrnQ-915czY', title: 'Variable Scope & Data Types in C++'  },
    { embedId: 'J05uoTbGOvQ', title: 'C++ Basic Input/Output & More'  },
    { embedId: '7D5A5ZMKRWw', title: 'C++ Header files & Operators'  },
    { embedId: 'a7Wim2t053E', title: 'C++ Reference Variables & Typecasting'  },
    { embedId: 'i3a-G6Ebh9E', title: 'Constants, Manipulators & Operator Precedence'  },
    { embedId: 'AY96XFqb934', title: 'If Else and Switch-Case Statement in C++'  },
    { embedId: 'DJh5NfK7h-U', title: 'Break and Continue Statements in C++'  },
    { embedId: 'EvYmTCx9BFs', title: 'Pointers in C++'  },
    { embedId: 'ePJxpxsnkGw', title: 'Arrays & Pointers Arithmetic in C++'  },
    { embedId: 'jCfR7CFlzts', title: 'Structures, Unions & Enums in C++'  },
    { embedId: 'RFLFX1boGwo', title: 'Functions & Function Prototypes in C++'  },
    
  ];

  return (
    <>
    <Back title='C++ code with harry'></Back>
    <div className='progress-container'>
        <div
          className='progress-bar'
          style={{
            width: `${(checkedCards / cardData.length) * 100}%`,
            backgroundColor: '#4CAF50',
          }}
        >
          {Math.round((checkedCards / cardData.length) * 100)}%
        </div>
      </div>
      <div className='card-container'>
        {cardData.map((card, index) => (
          <CardWithCheckbox
            key={index}
            cardTitle={card.title}
            embedId={card.embedId}
            onCheckboxChange={handleCardCheckboxChange}
          />
        ))}
      </div>
      
    </>
  );
};

export default Course;
