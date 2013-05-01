package com.goebl.misc;

import org.apache.commons.codec.language.DoubleMetaphone;

import java.io.*;

/**
 * Creates reference test-data for Double-Metaphone algorithm.
 */
public class CreateTestData {
    public static void main(String argv[]) throws FileNotFoundException {
        try {
            DoubleMetaphone doubleMetaphone = new DoubleMetaphone();
            BufferedReader reader = new BufferedReader(new InputStreamReader(new FileInputStream(argv[0]), "UTF-8"));
            BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(new FileOutputStream(argv[1]), "UTF-8"));

            writer.append("# firstName, lastName, primary(firstName), alternate(firstName), primary(lastName), alternate(lastName)");
            writer.newLine();
            writer.append("# @folks from linux: apologies for simplifying some names for this test!");
            writer.newLine();
            writer.newLine();

            StringBuilder sbuf = new StringBuilder();
            String name;
            while (null != (name = reader.readLine())) {
                int pos = name.indexOf(' ');
                if (pos < 0) {
                    continue;
                }
                sbuf.setLength(0);
                String firstName = name.substring(0, pos);
                String lastName = name.substring(pos + 1);
                
                sbuf.append(firstName).append('\t')
                    .append(lastName).append('\t')
                    .append(doubleMetaphone.doubleMetaphone(firstName, false)).append('\t')
                    .append(doubleMetaphone.doubleMetaphone(firstName, true)).append('\t')
                    .append(doubleMetaphone.doubleMetaphone(lastName, false)).append('\t')
                    .append(doubleMetaphone.doubleMetaphone(lastName, true));

                writer.append(sbuf);
                writer.newLine();
            }
            reader.close();
            writer.close();
            System.exit(0);
        } catch (Exception e) {
            e.printStackTrace();
            System.exit(-1);
        }
    }
}
