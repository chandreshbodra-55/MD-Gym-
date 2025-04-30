import React from 'react'

export default function Features() {
  return (
    <div className="container-fluid my-5">
    <div className="row">
        <div className="col-lg-4 p-0">
            <div className="box d-flex align-items-center bg-secondary text-white px-5">
                <i className="flaticon-training display-2 text-primary me-3"></i>
                <div>
                    <h2 className="text-white mb-3">Progression</h2>
                    <p>Progressive overload, the gradual increase in the intensity, volume, or resistance of your workouts over time, is a fundamental principle for achieving muscle growth and strength gains.
                    </p>
                </div>
            </div>
        </div>
        <div className="col-lg-4 p-0">
            <div className="box d-flex align-items-center bg-primary text-white px-5">
                <i className="flaticon-weightlifting display-2 text-secondary me-3"></i>
                <div>
                    <h2 className="text-white mb-3">Workout</h2>
                    <p>There are various types of workouts, including cardiovascular exercises, strength training, flexibility exercises, each targeting different aspects of fitness, The duration and intensity of workouts can vary depending on fitness level.
                    </p>
                </div>
            </div>
        </div>
        <div className="col-lg-4 p-0">
            <div className="box d-flex align-items-center bg-secondary text-white px-5">
                <i className="flaticon-treadmill display-2 text-primary me-3"></i>
                <div>
                    <h2 className="text-white mb-3">Nutrition</h2>
                    <p>There are various types of nutrition, including macronutrients, micronutrients, and hydration, each supporting different aspects of health. The requirements and balance of nutrients can vary depending on age, gender, and health status.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
