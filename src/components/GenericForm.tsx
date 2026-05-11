import React, {useState} from "react";
import { Button, Form } from "react-bootstrap";

type FieldType = | "text" | "email"| "number" | "password" | "checkbox";

type FormField<T> = {
    name: keyof T;
    label: string;
    type: FieldType;

    placeholder?: string;
    required?: boolean;
}

interface Props<T> {
    fields: FormField<T>[];
    initialValues?: Partial<T>;
    onSubmit: (values: T) => void;
}

export function GenericForm<T extends object>({fields, initialValues, onSubmit}: Props<T>) {
    const [formValues, setFormValues] = useState<Partial<T>>(initialValues || {});

    function handleChange( field: keyof T, value: any){
        setFormValues(prev => ({
            ...prev,
            [field]: value
        }))
    }

    function handleSubmit(e: React.SubmitEvent){
        e.preventDefault();

        onSubmit(formValues as T);
    }

    return (
        <Form onSubmit={handleSubmit}>
            {fields.map(field => (
                <Form.Group className="mb-3">
                    <Form.Label>{field.label}</Form.Label>
                    <Form.Control 
                        type = {field.type}
                        placeholder={field.placeholder}
                        required={field.required}
                        value={field.type ==='checkbox' ? undefined : String(formValues[field.name] ?? '')}
                        checked={
                            field.type === 'checkbox' ? Boolean(formValues[field.name]) : undefined
                        }
                        onChange={(e)=> handleChange(
                            field.name,
                            field.type === 'checkbox'? (e.target as HTMLInputElement).checked : e.target.value 
                        )}
                        />
                </Form.Group> 
            ))}
            <Button variant="primary" type="submit">Submit</Button>
        </Form>
    )
}