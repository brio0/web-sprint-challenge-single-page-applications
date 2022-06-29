import React from 'react'

const Form = (props) => {
    const {
        values,
        change,
        submit,
        disabled,
        errors,
    } = props

    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }


    return (
        <div >
            <p>{errors.name}</p>
            <p>{errors.size} </p>
            <p>{errors.sauce} </p>

            <form onSubmit={onSubmit} id='pizza-form'>
                <label>Name
                    <input
                        id='name-input'
                        type='text'
                        name='name'
                        onChange={onChange}
                        value={values.name}
                    />
                </label>
                <label>Select size:
                    <div >
                        <select id='size-dropdown' values={values.size} name='size' onChange={onChange}>
                            <option value=''>Select size</option>
                            <option value='small'>Small</option>
                            <option value='medium'>Medium</option>
                            <option value='large'>Large</option>
                        </select>
                    </div>
                </label>
                <label>Select Sauce:
                    <div className='sauce'>
                        <label>Original
                            <input
                                type='radio'
                                name='sauce'
                                value='original'
                                onChange={onChange}
                                checked={values.sauce === 'original'}
                            />
                        </label>
                        <label>Ranch
                            <input
                                type='radio'
                                name='sauce'
                                value='ranch'
                                onChange={onChange}
                                checked={values.sauce === 'ranch'}
                            />
                        </label>
                        <label>BBQ
                            <input
                                type='radio'
                                name='sauce'
                                value='bbq'
                                onChange={onChange}
                                checked={values.sauce === 'bbq'}
                            />
                        </label>
                        <label>Spinach
                            <input
                                type='radio'
                                name='sauce'
                                value='spinach'
                                onChange={onChange}
                                checked={values.sauce === 'spinach'}
                            />
                        </label>
                    </div>
                </label>
                <label>Add Toppings:
                    <div>
                        <label>Pepporoni
                            <input
                                type='checkbox'
                                name='pepporoni'
                                checked={values.pepporoni}
                                onChange={onChange}
                            />
                        </label>
                        <label>Sausage
                            <input
                                type='checkbox'
                                name='sausage'
                                checked={values.sausage}
                                onChange={onChange}
                            />
                        </label>
                        <label>Onion
                            <input
                                type='checkbox'
                                name='onions'
                                checked={values.onions}
                                onChange={onChange}
                            />
                        </label>
                        <label>Bacon
                            <input
                                type='checkbox'
                                name='bacon'
                                checked={values.bacon}
                                onChange={onChange}
                            />
                        </label>
                        <label>Mushrooms
                            <input
                                type='checkbox'
                                name='mushrooms'
                                checked={values.mushrooms}
                                onChange={onChange}
                            />
                        </label>
                    </div>
                </label>
                <label>Special Instructions
                    <div id='special-text'>
                        <input
                            type='text'
                            name='special'
                            value={values.special}
                            onChange={onChange}
                            placeholder='--Special Instructions--'
                        />
                    </div>
                </label>
                <button id='order-button' type='submit' disabled={disabled}>submit</button>
            </form>
        </div>
    )
}

export default Form