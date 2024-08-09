import React from "react";
import { ShopData } from "./shopData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCircleInfo } from "@fortawesome/free-solid-svg-icons";

class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ShopData,
      visibleId: null,
      shop_name: "",
      shop_title: "",
      shop_img: "",
      isAdd: false,
      active: null,
    };
  }
  render() {
    const { data, visibleId } = this.state;

    const onChange = (evt) => {
      this.setState({ [evt.target.name]: evt.target.value });
      if (evt.target.name === "shop_img") {
        let file = evt.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            this.setState({ shop_img: reader.result });
          };
          reader.readAsDataURL(file);
        }
      }
    };

    const onAddData = () => {
      if (
        this.state.shop_name &&
        this.state.shop_title &&
        this.state.shop_img
      ) {
        const newShop = {
          id: this.state.data.length + 1,
          shop_name: this.state.shop_name,
          shop_title: this.state.shop_title,
          shop_img: this.state.shop_img,
        };
        this.setState({
          data: [...this.state.data, newShop],
          shop_name: "",
          shop_title: "",
          shop_img: "",
          isAdd: false,
        });
      } else {
        alert("Magazin ma'lumotin kiriting");
      }
    };

    const addShop = () => {
      this.setState({ isAdd: true });
    };

    const onBack = () => {
      this.setState({ isAdd: false });
    };

    const onEdit = ({ id, shop_name, shop_title }, isSave) => {
      if (isSave) {
        let res = this.state.data.map((value) =>
          value.id === this.state.active?.id
            ? {
                ...value,
                shop_name: this.state.shop_name,
                shop_title: this.state.shop_title,
              }
            : value
        );
        this.setState({ active: null, data: res });
      } else {
        this.setState({
          shop_name: shop_name,
          shop_title: shop_title,
          active: { id, shop_name, shop_title },
        });
      }
    };

    const onDelete = (id) => {
      let res = this.state.data.filter((value) => value.id !== id);
      this.setState({ data: res });
    };

    const toggleVisibility = (id) => {
      this.setState((prevState) => ({
        visibleId: prevState.visibleId === id ? null : id,
      }));
    };
    return (
      <div className="container max-w-[1200px]">
        <div className="mt-5 p-10 rounded-md bg-[#F4F6FF] relative">
          <h2 className="mb-5 text-2xl">Sizning do'koningiz!</h2>
          <div>
            <ul
              className={
                this.state.isAdd === true
                  ? "p-10 flex items-center flex-wrap gap-14  rounded-lg bg-[#55555540] z-50"
                  : "p-10 flex items-center flex-wrap gap-14 rounded-lg bg-white"
              }
            >
              {data.map(({ id, shop_name, shop_title, shop_img }) => (
                <div key={id}>
                  <h3
                    className={
                      visibleId === id ? "block text-center mb-2" : "opacity-0"
                    }
                  >
                    <span className="mt-3 block text-xl">{shop_name}</span>
                  </h3>
                  <li className="py-8 px-16 text-center inline-block h-auto cursor-pointer rounded-lg hover:shadow-custom-shadow transition-all">
                    <img
                      className="w-[80px] rounded-full m-auto"
                      src={shop_img}
                      alt={shop_name}
                    />
                    <h3 className="text-2xl font-semibold">
                      {this.state.active?.id === id ? (
                        <input
                          onChange={onChange}
                          className="mt-2 w-[200px] border outline-none text-sm p-2 rounded-md font-medium"
                          name="shop_name"
                          value={this.state.shop_name}
                          type="text"
                        />
                      ) : (
                        shop_name
                      )}
                    </h3>
                    <span className="mb-5 block opacity-80">
                      {this.state.active?.id === id ? (
                        <input
                          onChange={onChange}
                          className="mt-2 w-[200px] border outline-none text-sm p-2 rounded-md font-medium"
                          name="shop_title"
                          value={this.state.shop_title}
                          type="text"
                        />
                      ) : (
                        shop_title
                      )}
                    </span>
                    <button
                      onClick={() => toggleVisibility(id)}
                      className="px-16 py-2 rounded-md bg-[#ECEBEC] border block text-md"
                    >
                      {visibleId === id ? "Chiqish" : "Kirish"}
                    </button>
                    <div className="flex items-center justify-between">
                      <button
                        onClick={() =>
                          onEdit(
                            { id, shop_name, shop_title },
                            this.state.active?.id === id
                          )
                        }
                        className="mt-2 p-2 px-4 rounded-md text-start block bg-[#ECEBEC]"
                      >
                        {this.state.active?.id === id ? "Save" : "Edit"}
                      </button>
                      <button
                        onClick={() => onDelete(id)}
                        className="mt-2 p-2 px-4 rounded-md text-start block bg-[#ff000080] text-white hover:bg-[#ff0000d3] transition-all"
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                </div>
              ))}
              <li className="w-[296px] h-[261px] rounded-lg cursor-pointer hover:shadow-custom-shadow transition-all">
                <button
                  onClick={addShop}
                  className="w-full h-full p-5 text-zinc-400"
                >
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="w-[50px] h-[50px] p-3 border-2 border-dashed rounded-xl block m-auto"
                  />
                  <span className="font-semibold hover:border-b">
                    Do'kon qo'shish
                  </span>
                </button>
              </li>
            </ul>
          </div>

          {/* // ============== modal */}
          <div className={this.state.isAdd === true ? "block mt-5" : "hidden"}>
            <div className="absolute top-[28%] left-[33%] p-10 w-[400px] bg-white m-auto rounded-md">
              <label>
                Kompaniya nomi
                <FontAwesomeIcon
                  icon={faCircleInfo}
                  className="text-sky-400 ml-2"
                />
                <input
                  onChange={onChange}
                  name="shop_name"
                  value={this.state.shop_name}
                  className="mt-2 w-full p-2 rounded-md block outline-none  bg-[#F4F6FF]"
                  type="text"
                  placeholder="Kompaniya nomini kiriting"
                />
              </label>
              <label className="mt-5 block">
                Faoliyat turi
                <FontAwesomeIcon
                  icon={faCircleInfo}
                  className="text-sky-400 ml-2"
                />
                <input
                  onChange={onChange}
                  name="shop_title"
                  value={this.state.shop_title}
                  className="mt-2 w-full p-2 rounded-md block outline-none bg-[#F4F6FF]"
                  type="text"
                  placeholder="owner..."
                />
              </label>
              <label className="mt-5 block">
                Kompaniya rasmi
                <FontAwesomeIcon
                  icon={faCircleInfo}
                  className="text-sky-400 ml-2"
                />
                <input
                  onChange={onChange}
                  name="shop_img"
                  className="mt-2 w-full p-2 rounded-md block outline-none bg-[#F4F6FF]"
                  type="file"
                />
              </label>
              <div className="mt-8">
                <button
                  onClick={onAddData}
                  className="py-2 px-8 rounded-md border-2 border-sky-500 bg-sky-500 text-white"
                >
                  Tasdiqlash
                </button>
                <button
                  onClick={onBack}
                  className="ml-6 py-2 px-6 rounded-md border-2 border-sky-500"
                >
                  Bekor qilish
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Shop;
