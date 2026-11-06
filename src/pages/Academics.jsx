const modules = [
  { code: 'BT1101', title: 'Introduction to Business Analytics' },
  { code: 'BT2101', title: 'Econometrics Modelling for Business Analytics' },
  { code: 'BT2102', title: 'Data Management and Visualisation' },
  { code: 'BT2103', title: 'Optimization Methods in Business Analytics' },
]

function Academics() {
  return (
    <section className="content-page" aria-labelledby="academics-heading">
      <div className="page-heading">
        <p className="eyebrow">Explore learning</p>
        <h1 id="academics-heading">Academic Modules</h1>
        <p>Business Analytics modules taught at the university.</p>
      </div>

      <div className="table-wrapper">
        <table>
          <caption className="sr-only">List of Business Analytics modules</caption>
          <thead>
            <tr>
              <th scope="col">Module Code</th>
              <th scope="col">Module Title</th>
            </tr>
          </thead>
          <tbody>
            {modules.map((module) => (
              <tr key={module.code}>
                <td className="module-code">{module.code}</td>
                <td>{module.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Academics
