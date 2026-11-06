const admissionSteps = [
  'Understanding Admission requirements',
  'Submit application online',
  'Upload supporting documents',
  'Make application fee payment',
  'Check application status',
]

function Admission() {
  return (
    <section className="content-page" aria-labelledby="admission-heading">
      <div className="page-heading">
        <p className="eyebrow">Your application journey</p>
        <h1 id="admission-heading">Admission Process</h1>
        <p>Complete these steps when applying to the university.</p>
      </div>

      <ol className="admission-timeline">
        {admissionSteps.map((step, index) => (
          <li key={step}>
            <span className="step-number" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default Admission
