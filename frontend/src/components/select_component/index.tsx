import { useState, useEffect } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";

import { TextFieldSelect } from "./styles";
import { SelectProps } from "./select_props";

interface Option {
    id: number;
    value: string;
}

function sleep(delay = 0) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}

export function Select({
    id,
    width,
    placeholder,
    label,
    _errorLabel,
    values,
    currentValue,
    disabled,
    double,
    error,
    selecteds,
    onChangeValue,
    ...rest
}: SelectProps) {
    const useWidth = width;

    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState<readonly Option[]>([]);
    const loading =
        open && options.length === 0 && !(values.length === 0);

    useEffect(() => {
        let active = true;

        if (!loading) {
            return undefined;
        }

        (async () => {
            await sleep(100);

            if (active) {
                setOptions([...values]);
            }
        })();

        return () => {
            active = false;
        };
    }, [loading]);

    useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);

    const disabledOptions = (option: any) => {
        let array: any = [];
        selecteds?.map((day: any) => {
            array.push(day?.id);
        });
        return array.includes(option.id);
    };

    return (
        <Autocomplete
            id={id}
            noOptionsText="Sem opções"
            loadingText="...carregando dados"
            open={open}
            onOpen={() => {
                setOpen(true);
            }}
            onClose={(_e) => {
                setOpen(false);
            }}
            disabled={disabled}
            getOptionDisabled={(option) => disabledOptions(option)}
            isOptionEqualToValue={(option, value) =>
                option?.id === value?.id
            }
            getOptionLabel={
                double
                    ? (option) => option.id - option.value
                    : (option) => option.value
            }
            options={options}
            loading={loading}
            value={!disabled ? currentValue : { id: " ", value: " " }}
            onChange={(_e, newValue) =>
                onChangeValue && onChangeValue(newValue)
            }
            style={{ width: useWidth }}
            renderInput={(params) => (
                <TextFieldSelect
                    {...params}
                    variant="outlined"
                    label={label}
                    placeholder={placeholder}
                    value={currentValue}
                    error={error ? true : false}
                    {...rest}
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <>
                                {loading ? (
                                    <CircularProgress
                                        color="inherit"
                                        size={20}
                                    />
                                ) : null}
                                {params.InputProps.endAdornment}
                            </>
                        ),
                    }}
                />
            )}
        />
    );
}
