interface ProgressbarGroupProps {
  titles: string[];
  values: number[];
}

export function ProgressbarGroup({ titles, values }: ProgressbarGroupProps) {
  return (
    <>
      {titles.map((title, index) => (
        <div
          className="row align-items-start"
          style={{ marginTop: "10px", marginBottom: "10px" }}
          key={index}
        >
          <div className="col" style={{ textAlign: "right" }}>
            <h5 className="fw-bold">{title}</h5>
          </div>
          <div className="col-8">
            <div
              className="progress"
              role="progressbar"
              aria-label="Default striped example"
              aria-valuemin={0}
              aria-valuemax={100}
              style={{ height: "25px" }}
            >
              <div
                className="progress-bar progress-bar-striped"
                style={{ width: values[index] + "%" }}
              ></div>
            </div>
          </div>
          <div className="col" style={{ textAlign: "left" }}>
            <h5 className="fw-bold">{values[index]}%</h5>
          </div>
        </div>
      ))}
    </>
  );
}
