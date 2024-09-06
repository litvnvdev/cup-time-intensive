import { Title } from "../../../shared/ui/title";

// TODO: create Input from here and move to shared/ui

export function Order() {
  return (
    <div className="px-4 sm:px-12 flex flex-col gap-6">
      <Title>Доставка</Title>
      <form
        className="flex flex-col gap-2 mb-10 lg:max-w-[620px] md:grid md:grid-cols-3 md:gap-4"
        action="#"
      >
        <input
          className="py-3 px-4 bg-teal-50 rounded"
          type="text"
          name="name"
          placeholder="Имя"
        />
        <input
          type="text"
          name="phone"
          placeholder="Телефон"
          className="py-3 px-4 bg-teal-50 rounded"
        />
        <input
          type="text"
          name="address"
          placeholder="Адрес"
          className="py-3 px-4 bg-teal-50 rounded md:col-[1/-1]"
        />
        <fieldset className="flex flex-col gap-2 mt-2">
          <legend className="text-xl mb-2">Оплата:</legend>
          <label className="flex gap-2">
            <input
              type="radio"
              className="cursor-pointer"
              name="payment"
              value="card"
              defaultChecked
            />
            Картой
          </label>
          <label className="flex gap-2">
            <input
              type="radio"
              className="cursor-pointer "
              name="payment"
              value="cash"
            />
            Наличные
          </label>
        </fieldset>
      </form>
    </div>
  );
}
