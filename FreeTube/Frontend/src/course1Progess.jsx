import React, { useState ,useEffect} from 'react';
import CardWithCheckbox from './Maulik';

// const CardWithCheckbox = ({ cardTitle, onCheckboxChange }) => {
//   const [isChecked, setIsChecked] = useState(false);

//   const handleCheckboxChange = () => {
//     setIsChecked(!isChecked);
//     onCheckboxChange(!isChecked);
//   };

//   return (
//     <div>
//       <h2>{cardTitle}</h2>
//       <p>Check the box below:</p>

//       <div>
//         <input
//           type="checkbox"
//           checked={isChecked}
//           onChange={handleCheckboxChange}
//           id={`checkbox-${cardTitle}`}
//         />
//         <label htmlFor={`checkbox-${cardTitle}`}>Checkbox</label>
//       </div>
//     </div>
//   );
// };

const App = () => {
    const [checkedCards, setCheckedCards] = useState(0);
  
    const handleCardCheckboxChange = (isChecked) => {
      setCheckedCards((prevCheckedCards) => (isChecked ? prevCheckedCards + 1 : prevCheckedCards - 1));
    };
    useEffect(() => {
        // Initialize the checked state of each card from localStorage upon component mount
        let initialCheckedCount = 0;
        for (let i = 1; i <= 3; i++) {
          const localStorageKey = `checkbox-Card ${i}`;
          const storedValue = localStorage.getItem(localStorageKey);
          if (storedValue === 'true') {
            initialCheckedCount++;
          }
        }
        setCheckedCards(initialCheckedCount);
      }, []);
  
    return (
      <div>
        <h1>Overall Progress</h1>
        <p>Total checked cards: {checkedCards}</p>
        <div
          style={{
            width: '100%',
            backgroundColor: '#ccc',
            height: '30px',
          }}
        >
          <div
            style={{
              width: `${(checkedCards / 3) * 100}%`, // Assuming 3 cards in this example
              height: '100%',
              backgroundColor: '#4CAF50',
              textAlign: 'center',
              lineHeight: '30px',
              color: 'white',
            }}
          >
            {Math.round((checkedCards / 3) * 100)}%
          </div>
        </div>
  
        <CardWithCheckbox cardTitle="Card 1" embedId="j8nAHeVKL08"  onCheckboxChange={handleCardCheckboxChange} />
        <CardWithCheckbox cardTitle="Card 2" onCheckboxChange={handleCardCheckboxChange} />
        <CardWithCheckbox cardTitle="Card 3" onCheckboxChange={handleCardCheckboxChange} />
      </div>
    );
  };
  
  export default App;