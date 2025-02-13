import { useContext } from 'react'
import { context as clientContext } from '../../contexts/client-context'
import { context as authorizationContext } from '../../contexts/authentication'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import checkTenantRouteAuthorization from '../../lib/check-tenant-route-authorization'
import { Link } from './_components'

export default ({ routes }) => {
  const tenantContext = useContext(clientContext)
  const { hasPermission } = useContext(authorizationContext)

  return (
    <Grid container spacing={2} sx={{ alignContent: 'flex-start' }}>
      <Grid item xs={12}>
        <Typography variant="h5">Quick links</Typography>
      </Grid>
      <Grid container item xs={12}>
        {routes
          .filter(({ group, tenants, requiredPermission = false }) => {
            if (tenants) {
              if (!checkTenantRouteAuthorization(tenants, tenantContext)) {
                return false
              }
            }

            if (requiredPermission) {
              if (!hasPermission || !hasPermission(requiredPermission)) {
                return false
              }
            }

            if (group === 'legal') return false
            if (group === 'source code') return false

            return true
          })
          .map(props => (
            <Grid item xs={12} key={props.label}>
              <Link {...props} />
            </Grid>
          ))}
      </Grid>
    </Grid>
  )
}
