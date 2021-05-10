import { memo, useMemo } from 'react'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Typography from '@material-ui/core/Typography'
import QuickForm from '../../../components/quick-form'
import debounce from '../../../lib/debounce'

export default memo(
  ({ name, placeholder, helperText, error, value, setValue, options, i = 0 }) => {
    value = value || options[0].name
    const effect = useMemo(() => debounce(({ value }) => setValue(value)), [setValue])

    return (
      <QuickForm effect={effect} value={value}>
        {(update, { value }) => {
          return (
            <TextField
              id={`${name}-${i}`}
              select
              placeholder={placeholder}
              helperText={helperText}
              fullWidth
              variant="outlined"
              margin="normal"
              label={name}
              error={error}
              value={value}
              onChange={e => update({ value: e.target.value })}
            >
              {options.map(({ name, description }) => {
                const [placeholder] = description?.split('::').map(s => s.trim()) || [name]
                return (
                  <MenuItem key={name} value={name}>
                    <Typography variant="overline">{placeholder}</Typography>
                  </MenuItem>
                )
              })}
            </TextField>
          )
        }}
      </QuickForm>
    )
  },
  /**
   * State is managed internally, and synced
   * to context (otherwise there is a lag when
   * typing).
   *
   * Don't re-render unless unmounted or the error
   * state changes
   */
  ({ error: a }, { error: b }) => {
    return a === b
  }
)