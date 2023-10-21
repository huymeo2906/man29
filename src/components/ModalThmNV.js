import styles from "./ModalThmNV.module.css";

const ModalThmNV = () => {
  return (
    <div className={styles.modalThmNV}>
      <div className={styles.labelParent}>
        <div className={styles.label}>Thêm mới đơn vị</div>
        <img className={styles.closeIcon} alt="" src="/close.svg" />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.inputParent}>
          <div className={styles.input}>
            <div className={styles.label1}>Tên đơn vị</div>
            <div className={styles.input1}>
              <img
                className={styles.outlineSearch}
                alt=""
                src="/uangledown.svg"
              />
              <div className={styles.labelPointer}>
                   <input
                      type="text"
                      id="tenDonVi"
                     value={this.state.tenDonVi}
                     onChange={this.handleTenDonViChange}
                    />
                <div className={styles.pointer} />
              </div>
              <img
                className={styles.outlineSearch}
                alt=""
                src="/uangledown.svg"
              />
              <img
                className={styles.outlineClose}
                alt=""
                src="/uangledown.svg"
              />
            </div>
          </div>
          <div className={styles.input2}>
            <div className={styles.label1}>Mã đơn vị</div>
            <div className={styles.input1}>
              <img
                className={styles.outlineSearch}
                alt=""
                src="/uangledown.svg"
              />
              <div className={styles.labelPointer}>
                   <input
                     type="text" 
                     id="maDonVi"
                     value={this.state.maDonVi}
                     onChange={this.handleMaDonViChange}
                    />
                <div className={styles.pointer} />
              </div>
              <img
                className={styles.outlineSearch}
                alt=""
                src="/uangledown.svg"
              />
              <img
                className={styles.outlineClose}
                alt=""
                src="/uangledown.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.inputGroup}>
          <div className={styles.inputGroup}>
            <div className={styles.label1}>Chọn đơn vị cấp trên</div>
            <div className={styles.dropdown}>
              <div className={styles.placeholderIcons}>
                <img
                  className={styles.outlineSearch2}
                  alt=""
                  src="/uangledown.svg"
                />
                    <select
                          id="donViCapTren"
                          value={this.state.donViCapTren}
                          onChange={this.handleDonViCapTrenChange}
                        >
                      <option value="Chọn đơn vị cấp trên">Chọn đơn vị cấp trên</option>
                      <option value="Đơn vị 1">Đơn vị cấp trên 1</option>
                      <option value="Đơn vị 2">Đơn vị cấp trên 2</option>
                      <option value="Đơn vị 3">Đơn vị cấp trên 3</option>
                      <option value="Đơn vị 4">Đơn vị cấp trên 4</option>
                      <option value="Đơn vị 5">Đơn vị cấp trên 5</option>       
                    </select>
                <img
                  className={styles.outlineSearch2}
                  alt=""
                  src="/uangledown.svg"
                />
              </div>
              <div className={styles.icons}>
                <img
                  className={styles.outlineSearch2}
                  alt=""
                  src="/uangledown.svg"
                />
                <img
                  className={styles.keyboardArrowDownIcon}
                  alt=""
                  src="/keyboardarrowdown.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.multiselect}>
            <div className={styles.listElementParent}>
              <div className={styles.listElement}>
                <div className={styles.label}>Đơn vị cấp trên 1</div>
                <img
                  className={styles.fillCheckmark}
                  alt=""
                  src="/-fill--checkmark.svg"
                />
              </div>
              <div className={styles.listElement1}>
                <img
                  className={styles.outlineFile}
                  alt=""
                  src="/uangledown.svg"
                />
                <div className={styles.label8}>Nguyễn Minh Hoàng</div>
                <img
                  className={styles.fillCheckmark1}
                  alt=""
                  src="/uangledown.svg"
                />
              </div>
              <div className={styles.listElement2}>
                <img
                  className={styles.outlineFile}
                  alt=""
                  src="/uangledown.svg"
                />
                <div className={styles.label9}>Đơn vị cấp trên 2</div>
                <img
                  className={styles.fillCheckmark1}
                  alt=""
                  src="/uangledown.svg"
                />
              </div>
              <div className={styles.listElement1}>
                <img
                  className={styles.outlineFile}
                  alt=""
                  src="/uangledown.svg"
                />
                <div className={styles.label8}>Đặng Hoàng Nam</div>
                <img
                  className={styles.fillCheckmark1}
                  alt=""
                  src="/uangledown.svg"
                />
              </div>
              <div className={styles.listElement1}>
                <img
                  className={styles.outlineFile}
                  alt=""
                  src="/uangledown.svg"
                />
                <div className={styles.label8}>Đặng Hoàng Nam</div>
                <img
                  className={styles.fillCheckmark1}
                  alt=""
                  src="/uangledown.svg"
                />
              </div>
              <div className={styles.listElement2}>
                <img
                  className={styles.outlineFile}
                  alt=""
                  src="/uangledown.svg"
                />
                <div className={styles.label9}>Đơn vị cấp trên 3</div>
                <img
                  className={styles.fillCheckmark1}
                  alt=""
                  src="/uangledown.svg"
                />
              </div>
              <div className={styles.listElement2}>
                <img
                  className={styles.outlineFile}
                  alt=""
                  src="/uangledown.svg"
                />
                <div className={styles.label9}>Đơn vị cấp trên 4</div>
                <img
                  className={styles.fillCheckmark1}
                  alt=""
                  src="/uangledown.svg"
                />
              </div>
              <div className={styles.listElement2}>
                <img
                  className={styles.outlineFile}
                  alt=""
                  src="/uangledown.svg"
                />
                <div className={styles.label9}>Đơn vị cấp trên 5</div>
                <img
                  className={styles.fillCheckmark1}
                  alt=""
                  src="/uangledown.svg"
                />
              </div>
              <div className={styles.listElement1}>
                <img
                  className={styles.outlineFile}
                  alt=""
                  src="/uangledown.svg"
                />
                <div className={styles.label8}>Nguyễn Minh Khôi</div>
                <img
                  className={styles.fillCheckmark1}
                  alt=""
                  src="/uangledown.svg"
                />
              </div>
              <div className={styles.listElement1}>
                <img
                  className={styles.outlineFile}
                  alt=""
                  src="/uangledown.svg"
                />
                <div className={styles.label8}>Nguyễn Minh Khôi</div>
                <img
                  className={styles.fillCheckmark1}
                  alt=""
                  src="/uangledown.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.input5}>
          <div className={styles.label1}>Trạng thái</div>
          <div className={styles.input6}>
            <img
              className={styles.outlineSearch}
              alt=""
              src="/uangledown.svg"
            />
                <input
                   type="text"
                   value={inputValue}
                   onChange={handleInputChange}
                   placeholder="Khóa"
                  />
            <img
              className={styles.outlineSearch}
              alt=""
              src="/uangledown.svg"
            />
            <img className={styles.outlineClose} alt="" src="/uangledown.svg" />
          </div>
        </div>
      </div>
      <div className={styles.modalfooter}>
        <div className={styles.icons}>
          <div className={styles.button}>
            <img
              className={styles.keyboardArrowRightIcon}
              alt=""
              src="/uangledown.svg"
            />
               <button onClick={handleClick}>
                    Hủy bỏ
                </button>
          </div>
          <div className={styles.filter}>
            <div className={styles.ucheckParent}>
              <img
                className={styles.keyboardArrowDownIcon}
                alt=""
                src="/ucheck.svg"
              />
              <div className={styles.spXpTheoParent}>
                <div className={styles.spXpTheo}>Sắp xếp theo</div>
                <button onClick={handleClick}>
                    Cập nhật
                </button>
              </div>
            </div>
            <img
              className={styles.keyboardArrowRightIcon}
              alt=""
              src="/uangledown.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalThmNV;
