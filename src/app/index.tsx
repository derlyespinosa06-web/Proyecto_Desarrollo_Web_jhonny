import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function App() {
  const [cantidad, setCantidad] = useState(1);

  const sumar = () => setCantidad(cantidad + 1);
  const restar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <View style={styles.pantalla}>
      <Text style={styles.appTitulo}>APP SENA</Text>

      <View style={styles.tarjeta}>
        <Text style={styles.producto}>Producto</Text>
        <Text style={styles.precio}>$ 10.000</Text>

        <View style={styles.filaControles}>
          <TouchableOpacity style={styles.cajaBoton} onPress={sumar}>
            <Text style={styles.signo}>+</Text>
          </TouchableOpacity>

          <Text style={styles.cantidad}>{cantidad}</Text>

          <TouchableOpacity style={styles.cajaBoton} onPress={restar}>
            <Text style={styles.signo}>-</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pantalla: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  appTitulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#111111",
    marginBottom: 24,
  },
  tarjeta: {
    width: 220,
    borderWidth: 2,
    borderColor: "#111111",
    borderRadius: 16,
    paddingVertical: 22,
    paddingHorizontal: 16,
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  producto: {
    fontSize: 20,
    fontWeight: "600",
    color: "#111111",
    marginBottom: 6,
  },
  precio: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111111",
    marginBottom: 18,
  },
  filaControles: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  cajaBoton: {
    width: 36,
    height: 36,
    borderWidth: 2,
    borderColor: "#111111",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  signo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111111",
  },
  cantidad: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111111",
    minWidth: 24,
    textAlign: "center",
  },
});