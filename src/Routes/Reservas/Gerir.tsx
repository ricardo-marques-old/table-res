import * as React from "react"

import { Text } from "Components/Text"
import { DateInput } from "Components/Inputs/Date"
import { TextInput } from "Components/Inputs/Text"

import { DefaultLayout } from "Layouts/Default"

import ReservationsDB, { Reservation } from "DB/Reservations"

interface State {
  reservations: Array<Reservation> | null
  filtered: Array<Reservation> | null
  dateFilter: string
  nameFilter: string
}

export class ReservasGerir extends React.PureComponent<{}, State> {
  state: State = {
    reservations: null,
    filtered: null,
    dateFilter: "",
    nameFilter: ""
  }

  render() {
    return (
      <DefaultLayout
        title="Reservas"
        breadcrumbs={[
          { label: "Reservas", linkTo: "/reservas" },
          { label: "Gerir", linkTo: "/reservas/gerir" }
        ]}
      >
        <DateInput
          label="Filtrar por data"
          value={this.state.dateFilter}
          onChange={this._onDateFilterChange}
        />{" "}
        <TextInput
          label="Filtrar por nome"
          value={this.state.nameFilter}
          onChange={this._onNameFilterChange}
        />
        {this.state.filtered == null && <Text>Pesquisa por nome ou data</Text>}
        {this.state.filtered != null &&
          this.state.filtered.map(reservation => (
            <div key={reservation.id}>{reservation.id}</div>
          ))}
      </DefaultLayout>
    )
  }

  async componentDidMount() {
    this.setState(
      {
        reservations: await ReservationsDB.getAll()
      },
      this._applyFilter
    )
  }

  _onDateFilterChange = (newDateFilter: string) => {
    this.setState({ dateFilter: newDateFilter }, this._applyFilter)
  }

  _onNameFilterChange = (newNameFilter: string) => {
    this.setState({ nameFilter: newNameFilter }, this._applyFilter)
  }

  _applyFilter = () => {
    const { nameFilter, dateFilter, reservations } = this.state

    if (reservations == null) {
      return
    }

    if (nameFilter === "" && dateFilter === "") {
      this.setState({ filtered: null })
      return
    }

    let filtered: Array<Reservation> = []

    reservations.forEach(reservation => {
      if (
        nameFilter !== "" &&
        reservation.name.toLowerCase().indexOf(nameFilter.toLowerCase()) === -1
      ) {
        return
      }

      filtered.push(reservation)
    })

    this.setState({ filtered })
  }
}
