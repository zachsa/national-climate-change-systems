import DownloadExcelTemplate from '../../../components/download-template'
import UploadProject from '../../../components/submit-template'
import ToolbarHeader from '../../../components/toolbar-header'
import Divider from '@material-ui/core/Divider'
import useTheme from '@material-ui/core/styles/useTheme'
import Hidden from '@material-ui/core/Hidden'

export default () => {
  const theme = useTheme()

  return (
    <ToolbarHeader>
      <Hidden xsDown>
        <DownloadExcelTemplate />
        <div style={{ marginLeft: theme.spacing(2) }} />
        <UploadProject />
        <Divider
          flexItem
          orientation="vertical"
          style={{ marginLeft: theme.spacing(2), marginRight: theme.spacing(2) }}
        />
      </Hidden>
      <div style={{ marginRight: 'auto' }} />
    </ToolbarHeader>
  )
}