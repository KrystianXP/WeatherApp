import React, { useState } from 'react';

function LocationSelector() {
    // Stan do przechowywania wybranego miasta i kontrolowania widoczności listy
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedCity, setSelectedCity] = useState("Miejscowość");

    // Lista dostępnych miast
    const cities = ["Warszawa", "Kraków", "Gdańsk", "Wrocław", "Poznań"];

    // Funkcja do zmiany widoczności listy
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // Funkcja do wyboru miasta
    const selectCity = (city) => {
        setSelectedCity(city);
        setIsDropdownOpen(false); // Zamknięcie listy po wyborze
    };

    return (
        <div>
            {/* Napis miejscowość, po kliknięciu otwiera listę */}
            <span onClick={toggleDropdown} style={{ cursor: "pointer" }}>
                {selectedCity}
            </span>

            {/* Lista miast wyświetlana tylko wtedy, gdy isDropdownOpen jest true */}
            {isDropdownOpen && (
                <ul style={{ listStyleType: "none", padding: 0, margin: "10px 0", backgroundColor: "#3A6378", color: "white", borderRadius: "5px" }}>
                    {cities.map((city) => (
                        <li
                            key={city}
                            onClick={() => selectCity(city)}
                            style={{ padding: "10px", cursor: "pointer", borderBottom: "1px solid #5A8398" }}
                        >
                            {city}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default LocationSelector;
