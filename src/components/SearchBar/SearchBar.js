import React from 'react'
import SearchBarScss from './searchbar.module.scss';

function SearchBar(props) {
    const { handleChange, handleCheck } = props;

    return (
        <section id={SearchBarScss.search}>
            <form>
                <div className={SearchBarScss.search_container}>
                    <div className={SearchBarScss.checkboxes}>
                        <label htmlFor="breakfast">Kahvaltı
                    <input type="checkbox"
                                id="breakfast"
                                name="breakfast"
                                onChange={handleChange}
                                defaultChecked={handleCheck}
                            />  <span className={SearchBarScss.checkmark}></span>
                        </label>
                    </div>

                    <div className={SearchBarScss.checkboxes}>
                        <label htmlFor="luks">Lüks
                    <input type="checkbox"
                                id="luks"
                                name="luks"
                                onChange={handleChange}
                                defaultChecked={handleCheck}
                            />  <span className={SearchBarScss.checkmark}></span>
                        </label>
                    </div>

                    <div className={SearchBarScss.checkboxes}>
                        <label htmlFor="freeotopark">Ücretsiz Otopark
                    <input type="checkbox"
                                id="freeotopark"
                                name="freeotopark"
                                onChange={handleChange}
                                defaultChecked={handleCheck}
                            /> <span className={SearchBarScss.checkmark}></span>
                        </label>
                    </div>

                    <div className={SearchBarScss.checkboxes}>
                        <label htmlFor="pool">Havuz
                    <input type="checkbox"
                                id="pool"
                                name="pool"
                                onChange={handleChange}
                                defaultChecked={handleCheck}
                            /> <span className={SearchBarScss.checkmark}></span>
                        </label>
                    </div>

                    <div className={SearchBarScss.checkboxes}>
                        <label htmlFor="wifi">Ücretsiz Wireless
                    <input type="checkbox"
                                id="wifi"
                                name="wifi"
                                onChange={handleChange}
                                defaultChecked={handleCheck}
                            /> <span className={SearchBarScss.checkmark}></span>
                        </label>
                    </div>

                    <div className={SearchBarScss.checkboxes}>
                        <label htmlFor="gym"> Spor Salonu
                    <input type="checkbox"
                                id="gym"
                                name="gym"
                                onChange={handleChange}
                                defaultChecked={handleCheck}
                            /> <span className={SearchBarScss.checkmark}></span>
                        </label>
                    </div>

                    <div className={SearchBarScss.checkboxes}>
                        <label htmlFor="bar"> Otel Bar
                    <input type="checkbox"
                                id="bar"
                                name="bar"
                                onChange={handleChange}
                                defaultChecked={handleCheck}
                            /> <span className={SearchBarScss.checkmark}></span>
                        </label>
                    </div>

                    <div className={SearchBarScss.checkboxes}>
                        <label htmlFor="beach">Sahili var
                    <input type="checkbox"
                                id="beach"
                                name="beach"
                                onChange={handleChange}
                                defaultChecked={handleCheck}
                            /> <span className={SearchBarScss.checkmark}></span>
                        </label>
                    </div>


                    <div className={SearchBarScss.checkboxes}>
                        <label htmlFor="minigolf" > Mini Golf Sahası
                    <input type="checkbox"
                                id="minigolf"
                                name="minigolf"
                                onChange={handleChange}
                                defaultChecked={handleCheck}
                            /> <span className={SearchBarScss.checkmark}></span>
                        </label>
                    </div>

                </div>
            </form>
        </section>
    )
}

export default SearchBar
