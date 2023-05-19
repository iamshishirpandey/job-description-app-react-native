import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import styles from "./nearbyjobs.style";
import { SIZES, COLORS } from "../../../constants";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";
import useFetch from "../../../hook/useFetch";
const NearbyJobs = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch("search", {
    query: "React developer",
    num_pages: "1",
  });
  console.log(data);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs </Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size={"large"} color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong!</Text>
        ) : (
          data?.map((item) => {
            return (
              <NearbyJobCard
                job={item}
                key={`nearby-job-${item?.job_id}`}
                handleNavigate={() =>
                  router.push(`/job-details/${item.job_id}`)
                }
              />
            );
          })
        )}
      </View>
    </View>
  );
};

export default NearbyJobs;
