import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'

function SelectField({ label, options }) {
    const [value, setValue] = useState('')
    function handleChange(e) {
        setValue(e.target.value)
    }
    return (
        <Box mt={3} width={"100%"}>
            <FormControl fullWidth>
                <InputLabel>{label}</InputLabel>
                <Select
                    value={value}
                    label={label}
                    onChange={handleChange}>
                    {options.map(({ id, name }) => (
                        <MenuItem key={id}>{name}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    )
}

export default SelectField