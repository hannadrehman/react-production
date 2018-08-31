import React from 'react';
import PropTypes from 'prop-types';
import { FILE_UPLOAD } from 'Constants/api/api.endpoints';
import { getApiHeaders } from 'Services/api/api.authorization';
import {
  Upload, message, Button, Icon,
} from 'antd';

class SimpleUpload extends React.PureComponent {
  static propTypes = {
    fileName: PropTypes.string.isRequired,
    uploadText: PropTypes.string,
    accept: PropTypes.string.isRequired,
    onSuccessUpload: PropTypes.func.isRequired,
    data: PropTypes.object,
  }

  static defaultProps = {
    uploadText: 'Click to Upload',
    data: {},
  }

  state = {
    name: this.props.fileName, // eslint-disable-line
    action: FILE_UPLOAD,
    headers: getApiHeaders(),
    fileUploadSUccess: false,
  }

  handleFileStateChange = (info) => {
    const { onSuccessUpload } = this.props;
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
      onSuccessUpload(info.file.response.fileUrl);
      this.setState({
        fileUploadSUccess: true,
      });
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  }

  handleImageRemove = (info) => {
    const { onSuccessUpload } = this.props;
    if (info.status === 'removed') {
      this.setState({
        fileUploadSUccess: false,
      });
      onSuccessUpload(null);
    }
  }

  render() {
    const { uploadText, accept, data } = this.props;
    return (
      <Upload
        {...this.state}
        onChange={this.handleFileStateChange}
        accept={accept}
        onRemove={this.handleImageRemove}
        data={data}
      >
        <Button>
          <Icon type="upload" />
          {
              uploadText
            }
        </Button>
      </Upload>
    );
  }
}

export default SimpleUpload;
