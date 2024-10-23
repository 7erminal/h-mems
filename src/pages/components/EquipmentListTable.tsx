import React from "react";

const EquipmentListTable: React.FC = ()=>{
    return <div className="table-responsive p-0">
    <table className="table align-items-center mb-0">
      <thead>
        <tr>
          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Serial #</th>
          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">EQ Type</th>
          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Model #</th>
          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Manufacturer</th>
          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Department</th>
          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Location</th>
          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">DI</th>
          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Next Date</th>
          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Status</th>
          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Risk</th>
          <th className="text-secondary opacity-7"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">593990</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">PLINTH</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">Swift</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">Medi-plinth Ltd</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">Physiotherapy</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">GRAYS COURT</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">PPM</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">23/04/18</span>
            </td>
            <td className="align-middle text-center text-sm">
                <span className="badge badge-sm bg-gradient-success">Active</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">593990</span>
            </td>
          {/* <td>
            <div className="d-flex px-2 py-1">
              <div>
                <img src="/assets/img/team-2.jpg" className="avatar avatar-sm me-3" alt="user1" />
              </div>
              <div className="d-flex flex-column justify-content-center">
                <h6 className="mb-0 text-sm">John Michael</h6>
                <p className="text-xs text-secondary mb-0">john@creative-tim.com</p>
              </div>
            </div>
          </td> */}
          <td className="align-middle">
            <a href="javascript:;" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
              Edit
            </a>
          </td>
        </tr>

        <tr>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">593990</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">PLINTH</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">Swift</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">Medi-plinth Ltd</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">Physiotherapy</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">GRAYS COURT</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">PPM</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">23/04/18</span>
            </td>
            <td className="align-middle text-center text-sm">
                <span className="badge badge-sm bg-gradient-success">Active</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">593990</span>
            </td>
          {/* <td>
            <div className="d-flex px-2 py-1">
              <div>
                <img src="/assets/img/team-2.jpg" className="avatar avatar-sm me-3" alt="user1" />
              </div>
              <div className="d-flex flex-column justify-content-center">
                <h6 className="mb-0 text-sm">John Michael</h6>
                <p className="text-xs text-secondary mb-0">john@creative-tim.com</p>
              </div>
            </div>
          </td> */}
          <td className="align-middle">
            <a href="javascript:;" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
              Edit
            </a>
          </td>
        </tr>

        <tr>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">593990</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">PLINTH</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">Swift</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">Medi-plinth Ltd</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">Physiotherapy</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">GRAYS COURT</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">PPM</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">23/04/18</span>
            </td>
            <td className="align-middle text-center text-sm">
                <span className="badge badge-sm bg-gradient-success">Active</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">593990</span>
            </td>
          {/* <td>
            <div className="d-flex px-2 py-1">
              <div>
                <img src="/assets/img/team-2.jpg" className="avatar avatar-sm me-3" alt="user1" />
              </div>
              <div className="d-flex flex-column justify-content-center">
                <h6 className="mb-0 text-sm">John Michael</h6>
                <p className="text-xs text-secondary mb-0">john@creative-tim.com</p>
              </div>
            </div>
          </td> */}
          <td className="align-middle">
            <a href="javascript:;" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
              Edit
            </a>
          </td>
        </tr>

        <tr>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">593990</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">PLINTH</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">Swift</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">Medi-plinth Ltd</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">Physiotherapy</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">GRAYS COURT</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">PPM</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">23/04/18</span>
            </td>
            <td className="align-middle text-center text-sm">
                <span className="badge badge-sm bg-gradient-success">Active</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">593990</span>
            </td>
          {/* <td>
            <div className="d-flex px-2 py-1">
              <div>
                <img src="/assets/img/team-2.jpg" className="avatar avatar-sm me-3" alt="user1" />
              </div>
              <div className="d-flex flex-column justify-content-center">
                <h6 className="mb-0 text-sm">John Michael</h6>
                <p className="text-xs text-secondary mb-0">john@creative-tim.com</p>
              </div>
            </div>
          </td> */}
          <td className="align-middle">
            <a href="javascript:;" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
              Edit
            </a>
          </td>
        </tr>

        <tr>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">593990</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">PLINTH</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">Swift</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">Medi-plinth Ltd</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">Physiotherapy</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">GRAYS COURT</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">PPM</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">23/04/18</span>
            </td>
            <td className="align-middle text-center text-sm">
                <span className="badge badge-sm bg-gradient-success">Active</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">593990</span>
            </td>
          {/* <td>
            <div className="d-flex px-2 py-1">
              <div>
                <img src="/assets/img/team-2.jpg" className="avatar avatar-sm me-3" alt="user1" />
              </div>
              <div className="d-flex flex-column justify-content-center">
                <h6 className="mb-0 text-sm">John Michael</h6>
                <p className="text-xs text-secondary mb-0">john@creative-tim.com</p>
              </div>
            </div>
          </td> */}
          <td className="align-middle">
            <a href="javascript:;" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
              Edit
            </a>
          </td>
        </tr>

        <tr>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">593990</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">PLINTH</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">Swift</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">Medi-plinth Ltd</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">Physiotherapy</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">GRAYS COURT</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">PPM</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">23/04/18</span>
            </td>
            <td className="align-middle text-center text-sm">
                <span className="badge badge-sm bg-gradient-success">Active</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">593990</span>
            </td>
          {/* <td>
            <div className="d-flex px-2 py-1">
              <div>
                <img src="/assets/img/team-2.jpg" className="avatar avatar-sm me-3" alt="user1" />
              </div>
              <div className="d-flex flex-column justify-content-center">
                <h6 className="mb-0 text-sm">John Michael</h6>
                <p className="text-xs text-secondary mb-0">john@creative-tim.com</p>
              </div>
            </div>
          </td> */}
          <td className="align-middle">
            <a href="javascript:;" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
              Edit
            </a>
          </td>
        </tr>

        <tr>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">593990</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">PLINTH</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">Swift</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">Medi-plinth Ltd</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">Physiotherapy</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">GRAYS COURT</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">PPM</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">23/04/18</span>
            </td>
            <td className="align-middle text-center text-sm">
                <span className="badge badge-sm bg-gradient-success">Active</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">593990</span>
            </td>
          {/* <td>
            <div className="d-flex px-2 py-1">
              <div>
                <img src="/assets/img/team-2.jpg" className="avatar avatar-sm me-3" alt="user1" />
              </div>
              <div className="d-flex flex-column justify-content-center">
                <h6 className="mb-0 text-sm">John Michael</h6>
                <p className="text-xs text-secondary mb-0">john@creative-tim.com</p>
              </div>
            </div>
          </td> */}
          <td className="align-middle">
            <a href="javascript:;" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
              Edit
            </a>
          </td>
        </tr>

        <tr>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">593990</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">PLINTH</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">Swift</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">Medi-plinth Ltd</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">Physiotherapy</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">GRAYS COURT</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">PPM</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">23/04/18</span>
            </td>
            <td className="align-middle text-center text-sm">
                <span className="badge badge-sm bg-gradient-success">Active</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">593990</span>
            </td>
          {/* <td>
            <div className="d-flex px-2 py-1">
              <div>
                <img src="/assets/img/team-2.jpg" className="avatar avatar-sm me-3" alt="user1" />
              </div>
              <div className="d-flex flex-column justify-content-center">
                <h6 className="mb-0 text-sm">John Michael</h6>
                <p className="text-xs text-secondary mb-0">john@creative-tim.com</p>
              </div>
            </div>
          </td> */}
          <td className="align-middle">
            <a href="javascript:;" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
              Edit
            </a>
          </td>
        </tr>

        <tr>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">593990</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">PLINTH</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">Swift</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">Medi-plinth Ltd</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">Physiotherapy</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">GRAYS COURT</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">PPM</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">23/04/18</span>
            </td>
            <td className="align-middle text-center text-sm">
                <span className="badge badge-sm bg-gradient-success">Active</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">593990</span>
            </td>
          {/* <td>
            <div className="d-flex px-2 py-1">
              <div>
                <img src="/assets/img/team-2.jpg" className="avatar avatar-sm me-3" alt="user1" />
              </div>
              <div className="d-flex flex-column justify-content-center">
                <h6 className="mb-0 text-sm">John Michael</h6>
                <p className="text-xs text-secondary mb-0">john@creative-tim.com</p>
              </div>
            </div>
          </td> */}
          <td className="align-middle">
            <a href="javascript:;" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
              Edit
            </a>
          </td>
        </tr>

        <tr>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">593990</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">PLINTH</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">Swift</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">Medi-plinth Ltd</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">Physiotherapy</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">GRAYS COURT</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">PPM</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">23/04/18</span>
            </td>
            <td className="align-middle text-center text-sm">
                <span className="badge badge-sm bg-gradient-success">Active</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">593990</span>
            </td>
          {/* <td>
            <div className="d-flex px-2 py-1">
              <div>
                <img src="/assets/img/team-2.jpg" className="avatar avatar-sm me-3" alt="user1" />
              </div>
              <div className="d-flex flex-column justify-content-center">
                <h6 className="mb-0 text-sm">John Michael</h6>
                <p className="text-xs text-secondary mb-0">john@creative-tim.com</p>
              </div>
            </div>
          </td> */}
          <td className="align-middle">
            <a href="javascript:;" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
              Edit
            </a>
          </td>
        </tr>

      </tbody>
    </table>
  </div>
}

export default EquipmentListTable