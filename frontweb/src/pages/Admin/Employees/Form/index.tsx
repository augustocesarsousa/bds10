import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { Employee } from 'types/employee';
import './styles.css';

const Form = () => {

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
  } = useForm<Employee>();

  const onSubmit = () => {
    
  }

  const handleCancel = () => {
    history.push('/admin/employees');
  };

  return (
    <div className="employee-crud-container">
      <div className="base-card employee-crud-form-card">
        <h1 className="employee-crud-form-title">INFORME OS DADOS</h1>

        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="row employee-crud-inputs-container">
            <div className="col employee-crud-inputs-left-container">

              <div className="margin-bottom-30">
                <input type="text" 
                  className="form-control base-input is-invalid"
                />
                <div className="invalid-feedback d-block">
                  Mensagem de erro
                </div>
              </div>

              <div className="margin-bottom-30">
                <input 
                  {...register('email', {
                    required: 'Campo obrigatório',
                    pattern: {
                      value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: 'Email inválido',
                    },
                  })}
                  className={`form-control base-input ${
                    errors.email ? 'is-invalid' : ''
                  }`}
                  type="text" 
                  placeholder="Email"
                  name="email"
                  data-testid="email"
                />
                <div className="invalid-feedback d-block">
                {errors.email?.message}
                </div>
              </div>

            </div>
          </div>
          <div className="employee-crud-buttons-container">
            <button
              className="btn btn-outline-danger employee-crud-button"
              onClick={handleCancel}
            >
              CANCELAR
            </button>
            <button className="btn btn-primary employee-crud-button text-white">
              SALVAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
