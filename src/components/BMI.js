import React, { useState } from 'react'
export default function BMI() {

    const [myStyle, setMyStyle] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');

    const WeightVal = (event) => {

        setWeight(event.target.value);
    }

    const HeightVal = (event) => {
        setHeight(event.target.value);

    }

    const calculateBmi = () => {
        if (weight && height) {
            const bmi = (weight / ((height / 100) ** 2)).toFixed(2);

            setMyStyle(bmi);
        } else {

            setMyStyle('Please enter valid weight and height.');
        }
    };

    return (
        <div className="container-fluid-lg position-relative bmi my-5">
            <div className="container-lg">
                <div className="row px-lg-3 align-items-center mt-5">
                    <div className="col-md-6">
                        <div className="pe-md-3 d-none d-md-block">
                            <h4 className="text-primary"><strong>Body Mass Index (BMI)</strong></h4>
                            <h4 className="display-4 text-white fw-bold mb-4">What is BMI?</h4>
                            <strong><p className="m-0 text-white">Body Mass Index (BMI) is a person's weight in kilograms divided by the square of height in meters. A high BMI can indicate high body fatness. BMI screens for weight categories that may lead to health problems, but it does not diagnose the body fatness or health of an individual.</p></strong>
                            <br></br>
                            <strong><p className="m-0 text-white">Healthy BMI: 18.5-24.9, Overweight: 25-29.9, Obese: 30.</p></strong>
                        </div>
                    </div>
                    <div className="col-md-6 bg-secondary py-5">
                        <div className="py-md-5 px-3">
                            <h1 className="mb-4 text-white text-center text-md-start">Calculate Your BMI</h1>
                            <form>
                                <div className="row">
                                    <div className="col-sm mb-sm-0 mb-4">
                                        <input type="text" className="form-control bg-dark text-white rounded-0" value={weight} onChange={WeightVal} placeholder="Weight (KG)" />
                                    </div>
                                    <div className="col">
                                        <input type="text" className="form-control bg-dark text-white rounded-0" value={height} onChange={HeightVal} placeholder="Height (CM)" />
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col btn-wrap">
                                        <input type="button" onClick={calculateBmi} className="form-control bg-dark text-white rounded-0" value="Calculate Now" />
                                    </div>
                                    <div className="col">
                                        <input type="text" className="form-control bg-dark text-white rounded-0" value={myStyle} placeholder="BMI" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
